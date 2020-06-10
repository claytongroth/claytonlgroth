import React, { Fragment } from 'react';


const Chess = ({isMobile}) => {
    return ( 
            <div style={{ background: "black"}}>
                <div style={{paddingTop: 20, height: 300}}>
                    {!isMobile &&
                        <img 
                            style={{height: 100, width: 100, marginRight: 10}} 
                            src="/images/redux.svg" 
                            alt="redux" 
                        />
                    }
                    <img  
                        style={isMobile ? {height: "60%", width: "90%", borderRadius: 20} : {borderRadius: 20}} 
                        alt = "chess" src="/images/demogif.gif"
                    />
                    {!isMobile &&
                        <img 
                            style={{height: 100, width: 100, marginLeft: 10}} 
                            src="/images/react.svg" alt="react" 
                        />
                    }
                </div>
                <div style={{height: 200}}></div>
            </div>
       
    );
}

export const ChessCaption = ({isMobile}) =>  
    <Fragment>
        <h3>
            <a
                style={isMobile ? {color: "white", fontSize: "1rem"} : {color: "white"}}
                style={{color: "white"}}
                href="https://github.com/claytongroth/React-Redux-Chess" 
                target="_blank" rel="noopener norefferer"
            >
                React-Redux Chess
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
            I fully functional chess game I created from scratch with React-Redux.
            Redux is certainly not necessary here, but it gave me a nice place to store the whole game-state
            move-by-move <span role="img" aria-label="smily">&#128579;</span>.
        </p>
    </Fragment>
 
export default Chess;