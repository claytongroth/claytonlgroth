import React, { Fragment } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';


const Chess = () => {
    return ( 
            <div style={{ background: "black"}}>
                <div style={{paddingTop: 20, height: 300}}>
                    <img style={{height: 100, width: 100, marginRight: 10}} src="/images/redux.svg" alt="redux" />
                    <img  style={{borderRadius: 20}} alt = "ches" src="/images/demogif.gif"/>
                    <img style={{height: 100, width: 100, marginLeft: 10}} src="/images/react.svg" alt="react" />
                </div>
                <div style={{height: 200}}></div>
            </div>
       
    );
}

export const ChessCaption = () =>  
    <Fragment>
        <h3>
            <a
                style={{color: "white"}}
                href="https://github.com/claytongroth/React-Redux-Chess" 
                target="_blank" rel="noopener norefferer"
            >
                React-Redux Chess
            </a>
        </h3>
        <p>
            I fully functional chess game I created from scratch with React-Redux.
            Redux is certainly not necessary here, but it gave me a nice place to store the whole game-state
            move-by-move <span role="img" aria-label="smily">&#128579;</span>.
        </p>
    </Fragment>
 
export default Chess;