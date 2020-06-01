import React from 'react';
import { Row, Col, Carousel, Container, Image } from 'react-bootstrap';

const iconStyle = {
    width: "2rem",
    padding: 1
}


const MainPage = ({backToLanding}) => {
    return ( 
        <Container fluid>
            <button  className="back-btn" id="landingButton" onClick={backToLanding}> Back </button>
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
                    <p style={{fontSize: "2rem"}} className="mellow-banner-text"> 
                        Hello, my name is Clayton Groth. I am a full stack developer specializing in NodeJS and ReactJS. 
                        A genuine love of problem solving draws me to programming. More text.  More text.  More text.  More text.  
                        More text.  More text.  More text.  More text.  More text.  More text.  More text.  More text.  More text. 
                        More text.  More text.  More text.  More text.  More text.  More text.  More text.  More text.  More text. 
                    </p>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col>
                    <div style={{height: 500, background: "black"}}>
                        <Image src="holder.js/100px250" fluid />
                    </div>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col lg={5}>
                    <h3> Front End</h3>
                    <hr/>
                    <ul>
                        <li style={{textAlign: "left"}}>Tech I know (3yrs)</li>
                        <li style={{textAlign: "left"}}>Tech I know</li>
                        <li style={{textAlign: "left"}}>Tech I know</li>
                        <li style={{textAlign: "left"}}>Tech I know</li>


                    </ul>
                </Col>
                <Col lg={5}>
                    <h3> Back End</h3>
                    <hr/>
                    <ul>
                        <li style={{textAlign: "left"}}>Tech I know</li>
                        <li style={{textAlign: "left"}}>Tech I know</li>
                        <li style={{textAlign: "left"}}>Tech I know</li>
                        <li style={{textAlign: "left"}}>Tech I know</li>

                    </ul>
                </Col>
                <Col lg={2}>
                    <h3 style={{opacity: .8}}> Other Skills</h3>
                    <hr/>
                    <ul>
                        <li style={{textAlign: "left"}}>Tech I know</li>
                        <li style={{textAlign: "left"}}>Tech I know</li>
                        <li style={{textAlign: "left"}}>Tech I know</li>
                        <li style={{textAlign: "left"}}>Tech I know</li>

                    </ul>
                </Col>
            </Row>
            <br/>
            <h5 style={{textDecoration: "underline", textAlign: "left", fontSize: "2rem"}}> Resume PDF(123kb) </h5>
            <br/>
            <br/>
            <h5 style={{textDecoration: "underline", textAlign: "left", fontSize: "2rem"}}> Contact Me: </h5>
            <ul>
                <li style={{textAlign: "left"}}>method</li>
                <li style={{textAlign: "left"}}>method</li>
                <li style={{textAlign: "left"}}>method</li>
                <li style={{textAlign: "left"}}>method</li>
            </ul>

            <h3 style={{textDecoration: "underline"}}>Projects</h3>
            <Carousel>
                <Carousel.Item>
                    <div style={{height: 400, background: "black"}}>
                    </div>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{height: 400, background: "black"}}>
                    </div>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{height: 400, background: "black"}}>
                    </div>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br/>
            <br/>
            <h1 style={{textAlign: "left"}}> Testimonials </h1>
            <br/>
            <br/>
            <Row>
                <Col lg={{span: 1, offset: 1}}>
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
            </Row>
            <Row>
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
            </Row>
           
        </Container>
    );
}
 
export default MainPage;