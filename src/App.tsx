import React from 'react';
import './App.css';
import Color from './components/Color';
import Counter from './components/Counter';
import ImageSlider from './components/ImageSlider';

function App() {

  const randomNumber : number = Math.floor(
    Math.random() * 100
  )

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Color/>
        </div>
        <div className="col-4">
          <Counter initialCount={randomNumber}/>
        </div>
        <div className="col-4">
          <ImageSlider/>
          </div>
      </div>
    </div>
  );
}

// Sending color data from child (Color.tsx) to parent (App.tsx)

export default App;
