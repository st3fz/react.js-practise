import React, { useState } from 'react';
import './App.css';
import './assets/animation/shake.css'
import Welcome from './components/SignUp/Welcome/Welcome';
import Id from './components/SignUp/Id/Id';
import Authentication from './components/SignUp/Authentication/Authentication';
import Username from './components/SignUp/Username/Username';
import DisplayPhoto from './components/SignUp/DisplayPhoto/DisplayPhoto';

import Modal from 'react-modal';

const App :  React.FC = () => {

  const idRef = React.useRef<HTMLDivElement>(null);
  const usernameRef = React.useRef<HTMLDivElement>(null);
  const photoRef = React.useRef<HTMLDivElement>(null);
  const otpRef = React.useRef<HTMLDivElement>(null);

  const [ username, setUsername ] = useState<{data: string, componentRef: React.RefObject<HTMLDivElement>}>(
    {
      data: "",
      componentRef: usernameRef,
    }
  )

  const [ id, setId ] = useState<{data: number, componentRef: React.RefObject<HTMLDivElement>}>(
    {
      data: NaN,
      componentRef: idRef
    }
  )

  const [ mobile, setMobile ] = useState<{data: number, componentRef: React.RefObject<HTMLDivElement>}>(
    {
      data: NaN,
      componentRef: otpRef
    }
  )

  const [ email, setEmail ] = useState<{data: string, componentRef: React.RefObject<HTMLDivElement>}>(
    {
      data: "",
      componentRef: otpRef
    }
  )

  const [ displayPhoto, setDisplayPhoto ] = useState<{data: string, componentRef: React.RefObject<HTMLDivElement>}>(
    {
      data: "",
      componentRef: photoRef
    }
  )
  
  const allComponents = [ id, username, mobile, email, displayPhoto];

  const [ isSubmitted, setIsSubmitted ] = useState<boolean>(false);

  const resetShake = () => {
    var n = allComponents.length;
    for (let i = 0; i < n; i++) {
      allComponents[i].componentRef.current?.classList.remove('shake');
    }
  }

  const toggleIsSubmitted = () => {
    
    var blankComponents : React.RefObject<HTMLDivElement>[] = [];
    allComponents.forEach(item => {
      if (item.data===NaN || item.data==="") blankComponents.push(item.componentRef);
    })

    if (blankComponents.length !== 0) {
      blankComponents.forEach(item => {
        item.current?.classList.add('shake');
      });
    } else setIsSubmitted(true);
    setTimeout(resetShake, 1000);

    console.log(`username: ${username.data}, email: ${email.data}, mobile: ${mobile.data}, id: ${id.data}, dp: ${displayPhoto.data}`)
  }

  return (
    <div className="container text-center align-self-center">
      <div className="row">
        <div className="col-9">
          <Welcome/> 
        </div>
        <div ref={idRef} className="col-3">
          <Id id={id} setId={setId}/>
        </div>
        <div ref={photoRef} className="col-6">
          <DisplayPhoto displayPhoto={displayPhoto} setDisplayPhoto={setDisplayPhoto}/>
        </div>
        <div ref={usernameRef} className="col-6">
          <Username username={username} setUsername={setUsername} id={id}/>
        </div>
        <div ref={otpRef} className="col-6">
          <Authentication mobile={mobile} email={email} setMobile={setMobile} setEmail={setEmail}/>
        </div>
      </div>
      
      <button className="btn btn-warning"
      onClick={toggleIsSubmitted}>SIGN UP</button> <br/>

      <Modal id="Modal" isOpen={isSubmitted}>
        <div>
          <h2>Sign Up Complete</h2>
        <img id="display-photo" src={displayPhoto.data}/> {username.data}#{id.data} <br/>
        Mobile: {mobile.data} <br/>
        Email: {email.data}
      </div>
      </Modal>
    </div>
  );

}

export default App;
