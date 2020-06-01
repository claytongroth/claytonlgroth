import React from 'react';

const MainPage = ({backToLanding}) => {
    return ( 
        <div>
            Main Page
            <button onClick={backToLanding}> Go Back to Landing Page </button>
        </div>
    );
}
 
export default MainPage;