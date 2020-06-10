import React, { Fragment } from 'react';


const Ambul8 = ({isMobile}) => {
    return ( 
        <div style={{ background: "black"}}>
            <div style={{paddingTop: 20, height: 300}}>
                {!isMobile && 
                    <img 
                        style={{height: 100, width: 100, marginRight: 10, marginBottom: "15%"}} 
                        src="/images/flask.svg" alt="flask" 
                    />
                }
                <iframe 
                    title="myvideo"
                    width= { isMobile ? "90%" : "50%" }
                    height= { isMobile ? "80%" : "100%" }
                    frameBorder="0"
                    src={`https://www.youtube.com/embed/22afcnz0e3U?rel=0&amp;autoplay=1&mute=1`}>
                </iframe>
                {!isMobile && 
                    <img 
                        style={{height: 100, width: 100, marginLeft: 10, marginBottom: "15%"}} 
                        src="/images/python.svg" alt="python" 
                    />
                }

            </div>
            <div style={{height: 200}}></div>
        </div>
    );
}

export const Ambul8Caption = ({isMobile}) => 
    <Fragment>
        <h3>
            <a
                style={isMobile ? {color: "white", fontSize: "1rem"} : {color: "white"}}
                style={{color: "white"}}
                href="https://github.com/claytongroth/Ambul8_Walkability" 
                target="_blank" rel="noopener norefferer"
            >
                Ambul8: Walkability App
            </a>
        </h3>
        {isMobile && 
            <Fragment>
                <img 
                    style={{height: 30, width: 30, marginRight: 10}} 
                    src="/images/flask.svg" alt="flask" 
                />
                <img 
                    style={{height: 30, width: 30, marginLeft: 10}} 
                    src="/images/python.svg" alt="python" 
                />
            </Fragment>
        }
        <p style={isMobile ? {fontSize: ".75rem"} : {}}>
            A Flask-App I made with OSMNX and NetworkX Python libraries to calculate an area's
            walkability by just the node network!
        </p>
    </Fragment>
 
export default Ambul8;