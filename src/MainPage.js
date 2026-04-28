import React, { useEffect, useState, Fragment } from 'react';
import { Row, Col, Carousel, Container, Image } from 'react-bootstrap';
import Chess, { ChessCaption } from './components/Chess'
import Geovea, { GeoveaCaption } from './components/Geovea'
import GraphQLFull, { GraphQLFullCaption } from './components/GraphQLFull'
import Ambul8, { Ambul8Caption } from './components/Ambul8';
import Cquant, { CquantCaption } from './components/Cquant';

const iconStyle = {
    width: "2rem",
    padding: 1
}


const MainPage = ({backToLanding, isMobile}) => {

    const [fadedOut, setFadedOut] = useState(true);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        let whiteoutTimer = setTimeout(() => {
            setFadedOut(false)
        }, 500);
        return () => {
            clearTimeout(whiteoutTimer);
        }
    }, [])

    useEffect(() => {
        let hideTimer;
        if (!fadedOut){
            hideTimer = setTimeout(() => {
                setHide(true)
            }, 500);
        }
        return () => {
            clearTimeout(hideTimer);
        }
    }, [fadedOut])

    return ( 
        <Fragment>
        {!hide && <div className={fadedOut ? "faded-out" : "faded-in"}></div>}
        <Container  fluid>
            
            {/* <button  className="back-btn" id="landingButton" onClick={backToLanding}> Back </button> */}
            <h1 style={{textAlign: "left", fontSize: "3rem"}} id="title-name">Clayton Groth</h1>
            <br/>
            <br/>
            <br/>
                <a href="https://github.com/claytongroth" target="_blank" rel="noopener norefferer">
                    <img style={iconStyle} src="/images/github-logo.svg" alt="GitHub"/>
                </a>
                <a href="https://www.linkedin.com/in/clayton-groth-156aaa115/" target="_blank" rel="noopener norefferer">
                    <img style={{...iconStyle, marginLeft: "2rem"}} src="/images/linkedin.svg" alt="linkedIn"/>
                </a>               
            <br/>
            <br/>
            <Row>
                <Col>
                    <p style={{fontSize: isMobile ? "1rem" : "1.5rem"}} className="mellow-banner-text">
                        Hello, my name is Clayton Groth. I am a Software Engineer with deep expertise in scalable
                        web development, geospatial systems, data pipelines, data analysis, cyber security, and
                        technical communication. I have a proven ability to design and implement software solutions
                        that support diverse research and industry initiatives. In my career, I have consistently
                        combined technical skills in science, software, and GIS systems with good leadership and
                        empathetic communication. I am the person who can pick the tech stack, explain why, build
                        it from the ground up, and convey how it works in simple terms.
                        <br/>
                        <br/>
                        A genuine love of problem solving draws me to programming. I am fueled by creativity and the ability to 
                        apply analytical reasoning in my work! In my free time I love to travel, climb, and read philosophy!
                    </p>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row noGutters style={{ height: isMobile ? 165 : 500 }}>
                <Col>
                    <Image style={{height: isMobile ? 165 : 500 , width: "auto", borderRadius: isMobile ? 200 : 250 }} src="images/ATD.jpg" alt="image" fluid />
                </Col>
                <Col>
                    <Image style={{height: isMobile ? 165 : 500 , width: "auto", borderRadius: isMobile ? 200 : 250 }} src="images/headshot.jpeg" alt="image" fluid />
                </Col>
            </Row>
            <br/>
            <br/>

            {/* Experience Section */}
            <h2 style={{textAlign: "left", borderBottom: "2px solid #333", paddingBottom: "0.5rem"}}>Experience</h2>
            <br/>

            <div style={{textAlign: "left", marginBottom: "2rem"}}>
                <h4 style={{marginBottom: "0.25rem"}}>cQuant</h4>
                <p style={{fontStyle: "italic", opacity: 0.7, marginBottom: "0.5rem"}}>Staff Software Engineer | Remote | January 2021 – Present</p>
                <ul>
                    <li>Lead technical design and implementation of software architecture for production systems.</li>
                    <li>Built a robust renewable energy valuation tool from the ground up with geospatial tech and energy grid based analysis.</li>
                    <li>Design and deploy containerized applications (Docker, Kubernetes) with infrastructure automation (Ansible, Helm).</li>
                    <li>Develop high-performance production-grade data processing pipelines in Python, Go, and more for handling multi-dimensional environmental, financial and geospatial data.</li>
                    <li>Debugging, monitoring, and testing critical production systems for stability and security.</li>
                    <li>Provide technical leadership and mentoring to engineering team on software architecture, security, and best practices.</li>
                    <li>Collaborate with web and quantitative development teams to build and improve software in Python, R, JavaScript, Go, Bash/Shell, SQL, and more.</li>
                </ul>
            </div>

            <div style={{textAlign: "left", marginBottom: "2rem"}}>
                <h4 style={{marginBottom: "0.25rem"}}>Digital Locale</h4>
                <p style={{fontStyle: "italic", opacity: 0.7, marginBottom: "0.5rem"}}>Full Stack Developer | Remote | June 2019 – January 2021</p>
                <ul>
                    <li>Developed travel/mapping application integrating multiple geospatial data sources with interactive visualization using React and Mapbox GL.</li>
                    <li>Built REST APIs and spatial database models using Sequelize ORM and PostgreSQL for location-based research and analysis.</li>
                    <li>Implemented geospatial analysis features for route optimization and spatial pattern detection.</li>
                    <li>Created responsive web interfaces for exploring geographic data and environmental patterns.</li>
                </ul>
            </div>

            <div style={{textAlign: "left", marginBottom: "2rem"}}>
                <h4 style={{marginBottom: "0.25rem"}}>State Cartographer's Office (UW Madison)</h4>
                <p style={{fontStyle: "italic", opacity: 0.7, marginBottom: "0.5rem"}}>GIS Developer | Madison, WI | September 2018 – April 2019</p>
                <ul>
                    <li>Designed and developed web-based geospatial applications for visualizing spatial and tabular data using ReactJS.</li>
                    <li>Built Python-based spatial analysis tools for processing large geospatial datasets.</li>
                    <li>Developed complex queries with PostGIS for analyzing large spatial datasets for Wisconsin state government environmental monitoring programs.</li>
                    <li>Created interactive cartographic visualizations and data dashboards that translated complex spatial research into accessible tools.</li>
                    <li>Collaborated with academic researchers to understand requirements and deliver custom geospatial analysis solutions.</li>
                </ul>
            </div>

            <div style={{textAlign: "left", marginBottom: "2rem"}}>
                <h4 style={{marginBottom: "0.25rem"}}>Center for Sustainability and the Global Environment (UW Madison)</h4>
                <p style={{fontStyle: "italic", opacity: 0.7, marginBottom: "0.5rem"}}>Student Lab Tech | Madison, WI | September 2015 – April 2016</p>
                <ul>
                    <li>Assisted in research tasks (mostly scripting) for research projects.</li>
                    <li>Wrote and assisted with various data-pipeline and atmospheric modelling scripts in R, Fortran, Java, and Bash/Shell.</li>
                    <li>Completed a thesis on various atmospheric correlates of Ozone with EPA & NOAA data.</li>
                </ul>
            </div>

            <br/>

            {/* Education Section */}
            <h2 style={{textAlign: "left", borderBottom: "2px solid #333", paddingBottom: "0.5rem"}}>Education</h2>
            <br/>

            <div style={{textAlign: "left", marginBottom: "2rem"}}>
                <h4 style={{marginBottom: "0.25rem"}}>University of Wisconsin-Madison</h4>
                <p style={{fontStyle: "italic", opacity: 0.7, marginBottom: "0.5rem"}}>M.S. Geospatial Programming | September 2017 – August 2019</p>
                <ul>
                    <li>Specialized in geospatial software development, spatial algorithms, spatial analysis, and GIS systems.</li>
                    <li>Extensive coursework in both frontend and backend development for research-grade spatial systems.</li>
                    <li>Graduate-level training in spatial statistics, environmental modeling, and scientific computing.</li>
                </ul>
            </div>

            <div style={{textAlign: "left", marginBottom: "2rem"}}>
                <h4 style={{marginBottom: "0.25rem"}}>University of Wisconsin-Madison</h4>
                <p style={{fontStyle: "italic", opacity: 0.7, marginBottom: "0.5rem"}}>B.S. Environmental Science (Double Major: Philosophy) | September 2011 – May 2016</p>
                <ul>
                    <li>Focus: Computational analysis of climatological and air quality data using spatial modeling for the SAGE (Center for Sustainability and the Global Environment).</li>
                    <li>Research on spatial patterns in environmental datasets and climate change impacts.</li>
                    <li>Philosophy: grad-level coursework in logic, probability theory, and epistemology. Published in an undergraduate journal.</li>
                </ul>
            </div>

            <br/>

            {/* Technical Skills Section */}
            <h2 style={{textAlign: "left", borderBottom: "2px solid #333", paddingBottom: "0.5rem"}}>Technical Skills</h2>
            <br/>
            <Row>
                <Col lg={3}>
                    <h3>Software Engineering</h3>
                    <hr/>
                    <ul>
                        <li style={{textAlign: "left"}}>Python (expert)</li>
                        <li style={{textAlign: "left"}}>JavaScript/Node.js (expert)</li>
                        <li style={{textAlign: "left"}}>SQL (expert)</li>
                        <li style={{textAlign: "left"}}>GoLang</li>
                        <li style={{textAlign: "left"}}>C++,</li>
                        <li style={{textAlign: "left"}}>Bash/Shell</li>
                        <li style={{textAlign: "left"}}>React (expert), Redux, TypeScript</li>
                        <li style={{textAlign: "left"}}>Node.js, Express, REST APIs</li>
                        <li style={{textAlign: "left"}}>GraphQL, Flask, Django</li>
                        <li style={{textAlign: "left"}}>PostgreSQL/PostGIS (expert)</li>
                        <li style={{textAlign: "left"}}>MongoDB, SQLite, Oracle SQL</li>
                        <li style={{textAlign: "left"}}>Unix/Linux (expert)</li>
                        <li style={{textAlign: "left"}}>CI/CD pipelines</li>
                        <li style={{textAlign: "left"}}>CISSP training</li>
                        <li style={{textAlign: "left"}}>SAST/DAST</li>
                    </ul>
                </Col>
                <Col lg={3}>
                    <h3>Research & Data Science</h3>
                    <hr/>
                    <ul>
                        <li style={{textAlign: "left"}}>NumPy, Pandas, SciPy</li>
                        <li style={{textAlign: "left"}}>scikit-learn, TensorFlow</li>
                        <li style={{textAlign: "left"}}>Experience in GPU based computing for ML</li>
                        <li style={{textAlign: "left"}}>Matplotlib, Jupyter</li>
                        <li style={{textAlign: "left"}}>Large-scale data processing</li>
                        <li style={{textAlign: "left"}}>Parallel computing</li>
                        <li style={{textAlign: "left"}}>Terabyte+ dataset optimization</li>
                        <li style={{textAlign: "left"}}>Time series analysis</li>
                        <li style={{textAlign: "left"}}>Statistical modeling</li>
                        <li style={{textAlign: "left"}}>R statistical analysis</li>
                        <li style={{textAlign: "left"}}>Spatial statistics</li>
                        <li style={{textAlign: "left"}}>Environmental modeling</li>
                    </ul>
                </Col>
                <Col lg={3}>
                    <h3>Geospatial</h3>
                    <hr/>
                    <ul>
                        <li style={{textAlign: "left"}}>PostGIS, QGIS, ArcGIS</li>
                        <li style={{textAlign: "left"}}>GDAL/OGR</li>
                        <li style={{textAlign: "left"}}>Fiona, Shapely, GeoPandas</li>
                        <li style={{textAlign: "left"}}>Rasterio, OSMNX, pyproj</li>
                        <li style={{textAlign: "left"}}>Spatial statistics & analysis</li>
                        <li style={{textAlign: "left"}}>Network & terrain analysis</li>
                        <li style={{textAlign: "left"}}>Mapbox GL, Leaflet</li>
                        <li style={{textAlign: "left"}}>CartoDB, OpenLayers</li>
                        <li style={{textAlign: "left"}}>GeoJSON, Shapefiles</li>
                        <li style={{textAlign: "left"}}>GeoTIFF, NetCDF, KML</li>
                    </ul>
                </Col>
                <Col lg={3}>
                    <h3>Infrastructure & DevOps</h3>
                    <hr/>
                    <ul>
                        <li style={{textAlign: "left"}}>Docker, Docker-Compose</li>
                        <li style={{textAlign: "left"}}>Kubernetes</li>
                        <li style={{textAlign: "left"}}>Ansible, KubeCron, Cron</li>
                        <li style={{textAlign: "left"}}>AWS, Azure</li>
                        <li style={{textAlign: "left"}}>Production deployment & scaling</li>
                        <li style={{textAlign: "left"}}>Research infrastructure</li>
                        <li style={{textAlign: "left"}}>Git, GitHub workflows</li>
                        <li style={{textAlign: "left"}}>Shell scripting</li>
                    </ul>
                </Col>
            </Row>
            <br/>
            <br/>

            {/* Technical Leadership Section */}
            <h2 style={{textAlign: "left", borderBottom: "2px solid #333", paddingBottom: "0.5rem"}}>Technical Leadership & Collaboration</h2>
            <br/>
            <Row>
                <Col lg={6}>
                    <ul>
                        <li style={{textAlign: "left"}}>Software Architecture: Design high-level system architecture for industry applications</li>
                        <li style={{textAlign: "left"}}>Technical Mentoring: Guide junior developers and aspiring developers in software best practices</li>
                        <li style={{textAlign: "left"}}>Idea to Tech Translation: Convert complex research and industry needs into implementable software designs</li>
                    </ul>
                </Col>
                <Col lg={6}>
                    <ul>
                        <li style={{textAlign: "left"}}>Cross-disciplinary Communication: Bridge technical and domain expertise with quantitative analysts, environmental professionals, and researchers</li>
                        <li style={{textAlign: "left"}}>Code Review: Ensure quality, security, and maintainability of software</li>
                        <li style={{textAlign: "left"}}>Documentation: Create comprehensive technical and user documentation</li>
                    </ul>
                </Col>
            </Row>
            <br/>

            {/* Professional Development Section */}
            <h2 style={{textAlign: "left", borderBottom: "2px solid #333", paddingBottom: "0.5rem"}}>Professional Development</h2>
            <br/>
            <ul style={{textAlign: "left"}}>
                <li>CISSP Training: Cybersecurity best practices for research data protection</li>
                <li>Continuous Learning: Active engagement with philosophy and constant curiosity</li>
                <li>Turing Mentor: Active engagement mentoring aspiring software engineers</li>
            </ul>
            <br/>

            <h5 style={{textDecoration: "underline", textAlign: "left", fontSize: isMobile ? "1.5rem" : "2rem"}}>
                <a
                    style={{color: "black", cursor: "pointer"}}
                    href="/resume/Clayton_Groth_Resume.pdf"
                    download = "Clayton_Groth_Resume"
                    target="_blank" rel="noopener noreferrer"
                >
                    Resume PDF (129kb)
                </a>
            </h5>
            

            <br/>
            <br/>

            <h5 style={{textDecoration: "underline", textAlign: "left", fontSize: isMobile ? "1.5rem" : "2rem"}}> Contact Me: </h5>
            <ul>
                <li style={{textAlign: "left"}}>
                    <a style={{color: "black", textDecoration: isMobile ? "underline" : "none"}} href="mailto:claytoncgrth@gmail.com">Send Me an Email</a>
                </li>
                <li style={{textAlign: "left"}}>
                   <a 
                        style={{color: "black", textDecoration: isMobile ? "underline" : "none"}}
                        href="https://www.linkedin.com/in/clayton-groth-156aaa115/" 
                        target="_blank" rel="noopener norefferer"
                    >
                        Message Me On LinkedIn
                    </a> 
                </li>
            </ul>

            <h3 style={{textDecoration: "underline"}}>Projects</h3>
            <Carousel style={{height: 500}}>
                <Carousel.Item>
                        <Cquant isMobile={isMobile} />
                    <Carousel.Caption>
                       <CquantCaption isMobile={isMobile}/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <Geovea isMobile={isMobile} />
                    <Carousel.Caption>
                       <GeoveaCaption isMobile={isMobile}/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{backgroundColor: "black"}}>
                        <GraphQLFull isMobile={isMobile}/>
                    <Carousel.Caption style ={{background: "black"}}>
                        <GraphQLFullCaption isMobile={isMobile}/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <Ambul8 isMobile={isMobile}/>
                    <Carousel.Caption>
                        <Ambul8Caption isMobile={isMobile}/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                        <Chess isMobile={isMobile}/>
                    <Carousel.Caption>
                        <ChessCaption isMobile={isMobile}/>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br/>
            <br/>
            <h1 style={{textAlign: "left"}}> Testimonials </h1>
            <br/>
            <br/>
            <Row>
                <Col lg={{span: 2, offset: 1}}>
                    <Image style={{height: 300, maxHeight: 300, maxWidth: 350, width: 300}} src="images/Codie.jpg" roundedCircle />
                </Col>
                <Col lg={4} style={{textAlign: "left", marginLeft: isMobile ? 0 : 75}}>
                    <h4>Codie See</h4>
                    <h6 style={{opacity: .6, fontStyle: "italic"}}>Program Specialist/GIS web-developer at WI State Cartographer's Office</h6>
                    <p> 
                        The technology, resourcefulness, and energy that Clayton brought to our web products and lab as a whole was dynamic.  
                        With his lead, we were able to develop higher quality and more sustainable web applications while educating and engaging our project teams.  
                        His command of development is top-notch, detailed, very well documented, and committed to quality clearly demonstrated in the result.  
                        As a former manager, I can't recommend him highly enough.
                    </p>
                </Col>
            </Row>
           
        </Container>
        </Fragment>
    );
}
 
export default MainPage;