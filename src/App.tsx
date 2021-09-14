import React, { useEffect, useState } from 'react';
import './App.css';
import Welcome from './components/cards/Welcome/Welcome';
import Id from './components/cards/Id/Id';
import Authentication from './components/cards/Authentication/Authentication';
import Username from './components/cards/Username/Username';
import DisplayPhoto from './components/cards/DisplayPhoto/DisplayPhoto';

import ReactDOM from 'react-dom';

const App :  React.FC = () => {

  const [ fullName , setFullName ] = useState<string>("");
  const [ randomId , setRandomId ] = useState<number>(NaN);

  const getAllCardElements = () => {
    var elements = [];
    for (let x = 1; x <= 12; x++) {
      var noOfElements = document.getElementsByClassName("col-"+x).length;
      for (let i = 0; i < noOfElements-1; i++) {
        var element = document.getElementsByClassName("col-"+x)[i]; 
        elements.push(element);
      }
    }
    console.log(elements);
  } 

  useEffect(() => {
    getAllCardElements();
  })

  return (
    <div className="container text-center align-self-center">
      
      {/* Components */}
      <div className="row">
        <div className="col-9">
          <Welcome/> 
        </div>
        <div className="col-3">
          <Id setRandomId={setRandomId}/>
        </div>
        <div className="col-6">
          <DisplayPhoto/>
        </div>
        <div className="col-6">
          <Username setFullName={setFullName}/>
        </div>
        <div className="col-6">
          <Authentication/>
        </div>
      </div>
      
      {/* // Filled in details */}
      <div>
        <button className="btn btn-warning">SIGN UP</button> <br/>
        //To be displayed in model after clicking sign up <br/>
        Username: {fullName}#{randomId} <br/>
        Random Id:  <br/>
      </div>
    </div>
  );

}

export default App;
