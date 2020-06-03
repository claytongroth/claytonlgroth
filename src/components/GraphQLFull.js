import React, { Fragment } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';


const GraphQLFull = () => {
    return ( 
        <div >
            <div style={{height: 50}}></div>
            <img style={{height: 250, borderRadius: "50%"}} src="/images/fullstack.png" alt="GrahpQL"></img>
            <div style={{height: 200}}></div>
        </div>    
    );
}

export const GraphQLFullCaption = () => 
    <Fragment>
         <h3>
            <a
                style={{color: "white"}}
                href="https://github.com/claytongroth/GraphQL-Apollo-React-Fullstack-Template-from-scratch-" 
                target="_blank" rel="noopener norefferer"
            >
                GraphQL Apollo Express Mongo React Full Stack Template                             
            </a>
        </h3>
        <p>A full stack template I built from scratch, authentication-ready and good to go! </p>
    </Fragment>
 
export default GraphQLFull;