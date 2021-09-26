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

    const [ isMobileOtpClicked, setIsMobileOtpClicked ] = useState<boolean>(false);
    const [ isEmailOtpClicked, setIsEmailOtpClicked ] = useState<boolean>(false);
    const [ countdown , setCountdown ] = useState<number>(0);
    const [ mobileBtn , setMobileBtn ] = useState<string>("Send OTP");
    const [ emailBtn , setEmailBtn ] = useState<string>("Send OTP");

    useEffect(()=>{
        if(isMobileOtpClicked){
            setMobileBtn("3");
            const timer2 = setTimeout(()=>{
                setMobileBtn("2");
            },1000);
            const timer1 = setTimeout(()=>{
                setMobileBtn("1");
            },2000);
            const timerS = setTimeout(()=>{
                setMobileBtn("Submit");
            },4000);
        }
        if (mobileBtn === "Submit") setMobileBtn("✔");
    },[isMobileOtpClicked])

    useEffect(()=>{
        if (isEmailOtpClicked){
            setEmailBtn("3");
            const timer2 = setTimeout(()=>{
                setEmailBtn("2");
            },1000);
            const timer1 = setTimeout(()=>{
                setEmailBtn("1");
            },2000);
            const timerS = setTimeout(()=>{
                setEmailBtn("Submit");
            },4000);
        }
        if (emailBtn === "Submit") setEmailBtn("✔");
    },[isEmailOtpClicked])

    const animation = (<>
        <p>test?</p>
        <input/>
    </>);

    return(
        <>
        <input placeholder="Mobile" type="number" 
        onChange={e=>mobileData.data=parseInt(e.target.value)}></input>
        { isMobileOtpClicked ? <input placeholder="OTP" type="number"></input> : <></>}
        <button className="btn btn-success" onClick={()=>setIsMobileOtpClicked(!isMobileOtpClicked)}>{mobileBtn}</button>
        <br/>
        <input placeholder="Email" type="email"
        onChange={e=>emailData.data=e.target.value}></input>
        { isEmailOtpClicked ? <input placeholder="OTP" type="number"></input> : <></>}
        <button className="btn btn-success" onClick={()=>setIsEmailOtpClicked(!isEmailOtpClicked)}>{emailBtn}</button>
        </>
    )
}

export default Authentication;