import React, { Fragment } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';

const Geovea = ({isMobile}) => {
    return ( 
        <div style={{ background: "black"}}>
            <div style={{paddingTop: 20, height: 300}}>
                <img style={isMobile ? {width: "90%"} : {height: "40%", width: "auto"}} src="/images/geoveo_logo_green.svg" alt="geo" />
                <Row style={{width: "50%", margin: "auto", paddingTop: 30}}>
                    <Col >
                        < img style={isMobile ? {height: 50, width: 50} : {height: 100, width: 100}} src="/images/seq.svg" alt="seq" />
                    </Col>
                    <Col >
                        < img style={isMobile ? {height: 50, width: 50} : {height: 100, width: 100}} src="/images/node.svg" alt="node" />
                    </Col>
                    <Col >
                        <img style={isMobile ? {marginTop: 5, height: 50, width: 50} : {height: 100, width: 100}} src="/images/redux.svg" alt="redux" />
                    </Col>
                    <Col >
                        <img style={isMobile ? {marginTop: 5, height: 50, width: 50} : {height: 100, width: 100}} src="/images/react.svg" alt="react" />
                    </Col>
                </Row>
            </div>
            <div style={{height: 200}}></div>
        </div>
    );
}

export const GeoveaCaption = ({isMobile}) =>  
    <Fragment>
        <h3>
            <a
                style={isMobile ? {color: "white", fontSize: "1rem"} : {color: "white"}}
                style={{color: "white"}}
                href="https://www.geovea.com/" 
                target="_blank" rel="noopener norefferer"
            >
                Geovea
            </a>
        </h3>
        <p style={isMobile ? {fontSize: ".75rem"} : {}} >
            A travel planning application that I used do full stack dev for! 
            Check it out! We used Sequelize, NodeJS, Express, ReactJS and React-Redux.
        </p>
    </Fragment>
 
export default Geovea;