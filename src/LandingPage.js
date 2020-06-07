import React, {useState, useEffect} from 'react';
import { Jumbotron } from 'react-bootstrap';
import {Helmet} from 'react-helmet';


const LandingPage = ({enter}) => {
    const [show, setShow] = useState(false);
    const [fadedInName, setFadedInName] = useState(false);
    const [fadedInTitle, setFadedInTitle] = useState(false);
    const [fadedInButton, setFadedInButton] = useState(false);

    const [whiteout, setWhiteout] = useState(false);


    const handleEnter = () => {
        setFadedInButton(false)
        setFadedInTitle(false)
        setFadedInName(false)
        setWhiteout(true);

        setTimeout(() => {
            enter();
        }, 1000);
    }

    useEffect(() => { 
        setShow(true); 
        let namet = setTimeout(() => {
            setFadedInName(true)
        }, 1000);
        let titlet = setTimeout(() => {
            setFadedInTitle(true)
        }, 1500);
        let buttont = setTimeout(() => {
            setFadedInButton(true)
        }, 1700);
        return () => {
            clearTimeout(namet);
            clearTimeout(titlet);
            clearTimeout(buttont);
        }
    }, [])

    return (  
        <div style={{overflow:"hidden"}}>
            <div className={whiteout ? "white-out" : "white-in"}></div>
            <div > 
                <Helmet defer={true}>
                    <style>{`body { background-image: ${show? 'url(images/chaos.jpg), url(images/chaosblur.jpg)' : 'url(sky.PNG)'}; }`}</style>
                    <style>{'body { background-size: cover; }'}</style>
                    <style>{'body { background-repeat: no-repeat; }'}</style>
                </Helmet>
                <div id="landingCenter"></div>
                <Jumbotron id="landingJumbo">
                    <div className={fadedInName ? "fade-in" : "fade-out"} id="title-name">Clayton Groth</div>
                    <br/>
                    <div  className={fadedInTitle ? "fade-in" : "fade-out"} id="mellow-title-name">Full Stack Developer</div>
                    <br/>
                    <button className={fadedInButton ? "fade-in" : "fade-out"} id="landingButton" onClick={handleEnter}> Enter </button>
                </Jumbotron>
            </div>
        </div>
    );
}
 
export default LandingPage;