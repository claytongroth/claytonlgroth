import React, {useState, useEffect} from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import {Helmet} from 'react-helmet';

const iconStyle = {
    width: "2rem",
    padding: 1
}

const LandingPage = ({enter}) => {
    const [show, setShow] = useState(false);

    useEffect(() => { setShow(true); }, [])

    return (  
        <div>
          <div> 
            <Helmet defer={true}>
                <style>{`body { background-image: ${show? 'url(images/chaos.jpg), url(images/chaosblur.jpg)' : 'url(sky.PNG)'}; }`}</style>
                <style>{'body { background-size: cover; }'}</style>
                <style>{'body { background-repeat: no-repeat; }'}</style>
            </Helmet>
            <div id="landingCenter"></div>
            <Jumbotron id="landingJumbo" className="row justify-content-center align-self-center">
              <h1 id="title-name">Clayton Groth</h1>

                        <a href="https://github.com/claytongroth" target="_blank" rel="noopener norefferer">
                            <img style={iconStyle} src="/images/github-logo.svg" alt="GitHub"/>
                        </a>
                        <a href="https://www.linkedin.com/in/clayton-groth-156aaa115/" target="_blank" rel="noopener norefferer">
                            <img style={{...iconStyle, marginLeft: "2rem"}} src="/images/linkedin.svg" alt="linkedIn"/>
                        </a>
                <br/>
                <h3 id="mellow-title-name">Full Stack Developer</h3>
                <button id="landingButton" onClick={enter}> Enter </button>
            </Jumbotron>
            </div>
          </div>
    );
}
 
export default LandingPage;