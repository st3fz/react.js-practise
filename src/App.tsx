import React, { useState } from 'react';
import './App.css';
import Welcome from './components/cards/Welcome';
import Id from './components/cards/Id';
import Form from './components/cards/Form';
import Callback from './components/cards/Callback';
import ImageSlider from './components/cards/ImageSlider';

const App :  React.FC = () => {

  const [ fullName , setFullName ] = useState<string>("");
  const [ randomId , setRandomId ] = useState<number>(NaN);

  return (
    <div className="container text-center">
      
      {/* Components */}
      <div className="row align-items-center">
        <div className="col-6">
          <Welcome/> 
        </div>
        <div className="col-3">
          <Id setRandomId={setRandomId}/>
        </div>
        <div className="col-3">
          <ImageSlider/>
        </div>
        <div className="col-9">
          <Form/>
        </div>
        <div className="col-9">
          <Callback setFullName={setFullName}/>
        </div>
      </div>
      
      {/* // Filled in details */}
      {/* <div>
        Name: {fullName}
        Random Id: {randomId}
      </div> */}
      
    </div>
  );
  

}

export default App;
