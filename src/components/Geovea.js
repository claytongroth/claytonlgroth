import React, { Fragment } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';

const Geovea = () => {
    return ( 
        <div style={{ background: "black"}}>
            <div style={{paddingTop: 20, height: 300}}>
                <img style={{height: "40%", width: "auto"}} src="/images/geoveo_logo_green.svg" alt="geo" />
                <Row style={{width: "50%", margin: "auto", paddingTop: 30}}>
                    <Col>
                        < img style={{height: 100, width: 100}} src="/images/seq.svg" alt="seq" />
                    </Col>
                    <Col>
                        < img style={{height: 100, width: 100}} src="/images/node.svg" alt="node" />
                    </Col>
                    <Col>
                        <img style={{height: 100, width: 100}} src="/images/redux.svg" alt="redux" />
                    </Col>
                    <Col>
                        <img style={{height: 100, width: 100}} src="/images/react.svg" alt="react" />
                    </Col>
                </Row>
            </div>
            <div style={{height: 200}}></div>
        </div>
    );
}

export const GeoveaCaption = () =>  
    <Fragment>
        <h3>
            <a
                style={{color: "white"}}
                href="https://www.geovea.com/" 
                target="_blank" rel="noopener norefferer"
            >
                Geovea
            </a>
        </h3>
        <p>
            An awesome travel planning application that I currently do full stack dev for! 
            Check it out! We use Sequelize, NodeJS, Express, ReactJS and React-Redux.
        </p>
    </Fragment>
 
export default Geovea;