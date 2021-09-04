import React from 'react';
import './App.css';
import Color from './components/Color';
import Counter from './components/Counter';
import Form from './components/Form';
import Form2 from './components/Form2';
import ImageSlider from './components/ImageSlider';

function App() {

  const randomNumber : number = Math.floor(
    Math.random() * 100
  )

  return (
    <div className="container text-center my-auto">
      <div className="row">
        <div className="col-3">
          <Color/>
        </div>
        <div className="col-3">
          <Counter initialCount={randomNumber}/>
        </div>
        <div className="col-6">
          <ImageSlider/>
        </div>
        <div className="col-9">
          <Form/>
        </div>
        <div className="col-9">
          <Form2/>
        </div>
      </div>
    </div>
  );
}

export default App;
