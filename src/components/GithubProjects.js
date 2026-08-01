import React, { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'claytongroth';
// GitHub's REST API has no "pinned" field (that's GraphQL-only and needs an auth
// token, which can't safely live in client-side code on a public site) - so the
// pinned selection itself is kept in sync with the profile by hand here, while
// each repo's stats (stars, description, language, last push) are still fetched live.
const PINNED_REPOS = [
    'go_device_mapper',
    'sep-mpc-server',
    'fast_file_zip',
    'one_hour_fullstack_geospatial_challenge',
    'image_or_video_to_ansi',
    'Coding_Questions_Algorithms',
    'xor-encryption',
    'Disaster-Management-Mobile-App',
];

const LANGUAGE_COLORS = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Rust: '#dea584',
    Go: '#00ADD8',
    'C#': '#178600',
    'C++': '#f34b7d',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    'Jupyter Notebook': '#DA5B0B',
};

const formatUpdated = (isoDate) => {
    const days = Math.floor((Date.now() - new Date(isoDate).getTime()) / (1000 * 60 * 60 * 24));
    if (days < 1) return 'today';
    if (days === 1) return 'yesterday';
    if (days < 30) return `${days}d ago`;
    if (days < 365) return `${Math.floor(days / 30)}mo ago`;
    return `${Math.floor(days / 365)}y ago`;
}

const GithubProjects = ({ isMobile }) => {
    const [repos, setRepos] = useState([]);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        let cancelled = false;

        Promise.all(
            PINNED_REPOS.map((name) =>
                fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${name}`)
                    .then((res) => (res.ok ? res.json() : null))
            )
        )
            .then((results) => {
                if (cancelled) return;
                const valid = results.filter(Boolean);
                if (valid.length === 0) throw new Error('GitHub API request failed');
                setRepos(valid);
                setStatus('loaded');
            })
            .catch(() => {
                if (!cancelled) setStatus('error');
            });

        return () => { cancelled = true; }
    }, []);

    return (
        <div>
            {status === 'error' && (
                <p>
                    Couldn't load live repo data right now &mdash; browse them directly on{' '}
                    <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                        GitHub
                    </a>.
                </p>
            )}

            {status === 'loading' && (
                <p style={{ opacity: 0.6 }}>Loading recent repos&hellip;</p>
            )}

            {status === 'loaded' && (
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '1.25rem',
                    }}
                >
                    {repos.map((repo) => (
                        <a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-repo-card"
                        >
                            <h5 style={{ marginBottom: '0.5rem', wordBreak: 'break-word' }}>{repo.name}</h5>
                            <p style={{ fontSize: '.85rem', opacity: 0.8, minHeight: '2.6rem' }}>
                                {repo.description || 'No description provided.'}
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '.8rem', opacity: 0.85 }}>
                                {repo.language && (
                                    <span>
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                width: 10,
                                                height: 10,
                                                borderRadius: '50%',
                                                marginRight: 6,
                                                backgroundColor: LANGUAGE_COLORS[repo.language] || '#8b949e',
                                            }}
                                        />
                                        {repo.language}
                                    </span>
                                )}
                                {repo.stargazers_count > 0 && <span>&#9733; {repo.stargazers_count}</span>}
                                <span>Updated {formatUpdated(repo.pushed_at)}</span>
                            </div>
                        </a>
                    ))}
                </div>
            )}

            <p style={{ marginTop: '1.5rem' }}>
                <a href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`} target="_blank" rel="noopener noreferrer">
                    See all repos on GitHub &rarr;
                </a>
            </p>
        </div>
    );
}

export default GithubProjects;
