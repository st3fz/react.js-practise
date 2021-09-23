import React from 'react';
// import ReCAPTCHA from "react-google-recaptcha";

export const ReCaptcha = () => {

    const recaptchaRef = React.createRef();

    // const onChange = () => {
    //     const recaptchaValue = recaptchaRef.current.getValue();
    //     this.props.onSubmit(recaptchaValue);
    //   }

    return(
        <>
            
            {/* <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="Your client site key"
                onChange={()=>onChange()}
            /> */}
            
        </>
    )
}