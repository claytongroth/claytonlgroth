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
                    <p style={{fontSize: isMobile ? "1rem" : "2rem"}} className="mellow-banner-text"> 
                        Hello, my name is Clayton Groth. I am a full stack developer specializing in NodeJS and ReactJS. 
                        A genuine love of problem solving draws me to programming. I am fueled by creativity and the ability to 
                        apply analytical reasoning in my work! In my free time I love to travel, climb, and explore new music!
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
            <Row>
                <Col lg={4}>
                    <h3> Front End</h3>
                    <hr/>
                    <ul>
                        <li style={{textAlign: "left"}}>Javascript ES6 (5yrs)</li>
                        <li style={{textAlign: "left"}}>HTML5, CSS (5yrs)</li>
                        <li style={{textAlign: "left"}}>ReactJS (4yrs)</li>
                        <li style={{textAlign: "left"}}>Apollo + GraphQL</li>
                        <li style={{textAlign: "left"}}>React-Redux</li>
                        <li style={{textAlign: "left"}}>React-Router</li>
                        <li style={{textAlign: "left"}}>Popular CSS frameworks</li>
                        <li style={{textAlign: "left"}}>Responsive Web Design</li>
                        <li style={{textAlign: "left"}}>Web Mapping / Web GIS</li>
                        <li style={{textAlign: "left"}}>React-Mapbox, Mapbox-gl-js</li>
                        <li style={{textAlign: "left"}}>React-Native</li>
                        <li style={{textAlign: "left"}}>Some AngularJS experience</li>

                    </ul>
                </Col>
                <Col lg={4}>
                    <h3> Back End</h3>
                    <hr/>
                    <ul>
                        <li style={{textAlign: "left"}}>NodeJS, NPM (5yrs)</li>
                        <li style={{textAlign: "left"}}>Python (4yrs)</li>
                        <li style={{textAlign: "left"}}>ExpressJS</li>
                        <li style={{textAlign: "left"}}>MERN stack</li>
                        <li style={{textAlign: "left"}}>MongoDB</li>
                        <li style={{textAlign: "left"}}>Mongoose</li>
                        <li style={{textAlign: "left"}}>SQL</li>
                        <li style={{textAlign: "left"}}>MySQL</li>
                        <li style={{textAlign: "left"}}>PostGres SQL</li>
                        <li style={{textAlign: "left"}}>Sequelize</li>
                        <li style={{textAlign: "left"}}>PassportJS</li>
                        <li style={{textAlign: "left"}}>FireBase</li>
                        <li style={{textAlign: "left"}}>Authentication/Authorization</li>

                    </ul>
                </Col>
                <Col lg={4}>
                    <h3 style={{opacity: .8}}> Other Skills</h3>
                    <hr/>
                    <ul>
                        <li style={{textAlign: "left"}}>Java and C++ experience</li>
                        <li style={{textAlign: "left"}}>Very comfortable in Unix/Linux</li>
                        <li style={{textAlign: "left"}}>Git workflow</li>
                        <li style={{textAlign: "left"}}>Lots of Python libraries!</li>
                        <li style={{textAlign: "left"}}>Excellent interpersonal and communication skills.</li>


                    </ul>
                </Col>
            </Row>
            <br/>

            <h5 style={{textDecoration: "underline", textAlign: "left", fontSize: isMobile ? "1.5rem" : "2rem"}}> 
                <a 
                    style={{color: "black", cursor: "pointer"}} 
                    href="/resume/Clayton_Groth_Resume.pdf" 
                    download = "Clayton_Groth_Resume"
                    target="_blank" rel="noopener noreferrer"
                > 
                    Resume PDF (72.5kb) 
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
                    <h6 style={{opactiy: .6, fontStyle: "italic"}}>Program Specialst/GIS web-devloper at WI State Cartographer's Office</h6>
                    <p> 
                        The technology, resourcefulness, and energy that Clayton brought to our web products and lab as a whole was dynamic.  
                        With his lead, were we able to develop higher quality and more sustainable web applications while educating and engaging our project teams.  
                        His command of development is top-notch, detailed, very well documented, and committed to quality clearly demonstrated in the result.  
                        As a former manager, I can’t recommend him highly enough.
                    </p>
                </Col>
            </Row>
            {/* <Row>
                <Col lg={{span: 1, offset: 5}}>
                    <Image style={{height: 100, width: 100}} src="images/linkedin.svg" roundedCircle />
                </Col>
                <Col lg={2}>
                    <p> 
                        lakmsdalkndlkjandklamdklaldnskandl
                        lakmsdalkndlkjandklamdklaldnskandl
                        lakmsdalkndlkjandklamdklaldnskandl
                        lakmsdalkndlkjandklamdklaldnskandl
                    </p>
                </Col>
            </Row> */}
           
        </Container>
        </Fragment>
    );
}
 
export default MainPage;