import React, { Fragment } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';

const Cquant = ({isMobile}) => {
    return ( 
       <div style={{ background: "black"}}>
       <div style={{paddingTop: 20, height: 300}}>
           <img style={isMobile ? {width: "90%"} : {height: "40%", width: "auto"}} src="/images/cquant.png" alt="cq" />
           <Row style={{width: "50%", margin: "auto", paddingTop: 30}}>
               <Col >
                   < img style={isMobile ? {height: 50, width: 50} : {height: 100, width: 100}} src="/images/python.svg" alt="seq" />
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

export const CquantCaption = ({isMobile}) =>  
    <Fragment>
        <h3>
            <a
                style={isMobile ? {color: "white", fontSize: "1rem"} : {color: "white"}}
                style={{color: "white"}}
                href="https://github.com/claytongroth/React-Redux-Chess" 
                target="_blank" rel="noopener norefferer"
            >
                cQuant.io
            </a>
        </h3>
        {isMobile && 
            <Fragment>
                <img 
                    style={{height: 30, width: 30, marginRight: 10}} 
                    src="/images/redux.svg" alt="redux" 
                />
                <img 
                    style={{height: 30, width: 30, marginLeft: 10}} 
                    src="/images/react.svg" alt="react" 
                />
            </Fragment>
        }
        <p style={isMobile ? {fontSize: ".75rem"} : {}} >
            A Saas company for data analytics that I am sort of a "Jack of All Trades" for!
            I love working for cQuant. The team is great and the challenges keep me endlessly engaged!
        </p>
    </Fragment>
 
export default Cquant;