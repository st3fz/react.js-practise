import React, { useEffect, useState } from 'react';
import './App.css';
import Welcome from './components/cards/Welcome/Welcome';
import Id from './components/cards/Id/Id';
import Authentication from './components/cards/Authentication/Authentication';
import Username from './components/cards/Username/Username';
import DisplayPhoto from './components/cards/DisplayPhoto/DisplayPhoto';

import ReactDOM from 'react-dom';

const App :  React.FC = () => {

  const [ username, setUsername ] = useState<string>("");
  const [ randomId, setRandomId ] = useState<number>(NaN);
  const [ displayPhoto,  setDisplayPhoto ] = useState<string>("");
  const [ mobile, setMobile ] = useState<number>(NaN);
  const [ email, setEmail ] = useState<string>("");

  // const getAllCardElements = () => {
  //   var elements = [];
  //   for (let x = 1; x <= 12; x++) {
  //     var noOfElements = document.getElementsByClassName("col-"+x).length;
  //     for (let i = 0; i < noOfElements-1; i++) {
  //       var element = document.getElementsByClassName("col-"+x)[i]; 
  //       elements.push(element);
  //     }
  //   }
  //   console.log(elements);
  // } 

  // useEffect(() => {
  //   getAllCardElements();
  // })

  return (
    <div className="container text-center align-self-center">
      <div className="row">
        <div className="col-9">
          <Welcome/> 
        </div>
        <div className="col-3">
          <Id setRandomId={setRandomId}/>
        </div>
        <div className="col-6">
          <DisplayPhoto setDisplayPhoto={setDisplayPhoto} displayPhoto={displayPhoto}/>
        </div>
        <div className="col-6">
          <Username setUsername={setUsername}/>
        </div>
        <div className="col-6">
          <Authentication setMobile={setMobile} setEmail={setEmail}/>
        </div>
      </div>
      
      {/* // Filled in details */}
      <div>
        <button className="btn btn-warning">SIGN UP</button> <br/>
        
        Username: {username}#{randomId} <br/>
        Random Id:  <br/>
        Profile photo: <img id="display-photo" src={displayPhoto}/> <br/>
        Mobile: {mobile} <br/>
        Email: {email}
      </div>
    </div>
  );

}

export default App;
