import React, { useEffect, useState } from "react";

interface Props {
    setMobile: React.Dispatch<React.SetStateAction<{data: number, componentRef: React.RefObject<HTMLDivElement>}>>;
    mobile : {data: number, componentRef:React.RefObject<HTMLDivElement>};
    setEmail: React.Dispatch<React.SetStateAction<{data: string, componentRef: React.RefObject<HTMLDivElement>}>>;
    email : {data: string, componentRef:React.RefObject<HTMLDivElement>};
}

const Authentication: React.FC<Props> = ( props: Props ) => {

    var mobileData = {...props.mobile};
    var emailData = {...props.email};

    useEffect(()=>{
        props.setMobile(mobileData);
    },[mobileData]);

    useEffect(()=>{
        props.setEmail(emailData);
    },[emailData]);
    
    return(
        <>
        <input placeholder="Mobile" type="number" 
        onChange={e=>mobileData.data=parseInt(e.target.value)}></input>
        <button className="btn btn-success">Send OTP</button>
        <br/>
        <input placeholder="Email" type="email"
        onChange={e=>emailData.data=e.target.value}></input>  
        <button className="btn btn-success">Send OTP</button>
        </>
    )
}

export default Authentication;