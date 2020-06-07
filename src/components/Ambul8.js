import React, { Fragment } from 'react';


const Ambul8 = () => {
    return ( 
        <div style={{ background: "black"}}>
            <div style={{paddingTop: 20, height: 300}}>
                <img style={{height: 100, width: 100, marginRight: 10, marginBottom: "15%"}} src="/images/flask.svg" alt="flask" />
                <iframe 
                    title="myvideo"
                    width="50%" 
                    height="100%"
                    frameBorder="0"
                    src={`https://www.youtube.com/embed/22afcnz0e3U?rel=0&amp;autoplay=1&mute=1`}>
                </iframe>
                <img style={{height: 100, width: 100, marginLeft: 10, marginBottom: "15%"}} src="/images/python.svg" alt="python" />

            </div>
            <div style={{height: 200}}></div>
        </div>
    );
}

export const Ambul8Caption = () => 
    <Fragment>
        <h3>
            <a
                style={{color: "white"}}
                href="https://github.com/claytongroth/Ambul8_Walkability" 
                target="_blank" rel="noopener norefferer"
            >
                Ambul8: Walkability App
            </a>
        </h3>
        <p>
            A Flask-App I made with OSMNX and NetworkX Python libraries to calculate an area's
            walkability by just the node network!
        </p>
    </Fragment>
 
export default Ambul8;