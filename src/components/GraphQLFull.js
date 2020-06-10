import React, { Fragment } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';


const GraphQLFull = ({isMobile}) => {
    return ( 
        <div >
            <div style={{height: 50}}></div>
            <img style={isMobile ? {height: 100, width: "90%", borderRadius: "50%"} : {height: 250, borderRadius: "50%"}} src="/images/fullstack.png" alt="GrahpQL"></img>
            <div style={{height: isMobile ? 350 : 200}}></div>
        </div>    
    );
}

export const GraphQLFullCaption = ({isMobile}) => 
    <Fragment>
         <h3 >
            <a
                style={isMobile ? {color: "white", fontSize: "1rem"} : {color: "white"}}
                href="https://github.com/claytongroth/GraphQL-Apollo-React-Fullstack-Template-from-scratch-" 
                target="_blank" rel="noopener norefferer"
            >
                GraphQL Apollo Express Mongo React Full Stack Template                             
            </a>
        </h3>
        <p 
            style={isMobile ? {fontSize: ".75rem"} : {}}
        >
            A full stack template I built from scratch, authentication-ready and good to go! 
        </p>
    </Fragment>
 
export default GraphQLFull;