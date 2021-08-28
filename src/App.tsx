import React from 'react';
import './App.css';
import Color from './components/Color';
import Counter from './components/Counter';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div className="">
      <h3>Color gotten from buffer component: </h3>
      <Color/>
      <Counter initialCount={10}/>
      <ImageSlider/>
    </div>
  );
}

// Sending color data from child (Color.tsx) to parent (App.tsx)

export default App;
