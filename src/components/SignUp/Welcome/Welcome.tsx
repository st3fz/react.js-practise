import React from 'react';

const Welcome: React.FC = () => {
    return(
        <>
        <h1>Welcome</h1>
        <h6 className="mt-4">This is the page where you can create your own profile!</h6>
        <h6 style={{fontWeight: 100}} className="mt-4"><span className="font-weight-bold">Instructions: </span>
            <br/>
            Simply follow the grids and fill them up one by one. 
            
        </h6>
        <h6 style={{fontStyle: "italic" , fontWeight: 100}}>Challenge: Time is precious, how fast can you complete it?</h6>
        </>
    )
}

export default Welcome;