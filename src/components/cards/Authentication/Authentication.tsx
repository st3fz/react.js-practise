import React, { useState } from "react";

interface Props {
    setMobile: React.Dispatch<React.SetStateAction<number>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Authentication: React.FC<Props> = ( props: Props ) => {
    
    return(
        <>
        <input placeholder="Mobile" type="email" 
        onChange={e=>props.setEmail(e.target.value)}></input>
        <button className="btn btn-success">Send OTP</button>
        <br/>
        <input type="email" placeholder="Email" 
        onChange={e=>props.setMobile(parseInt(e.target.value))}></input>  
        <button className="btn btn-success">Send OTP</button>
        </>
    )
}

export default Authentication;