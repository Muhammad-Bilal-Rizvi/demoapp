import React from 'react';
import './App.css';
import Dinner from './dinner.js';

//  import logo from './logo.svg';



function App() {
  return (
    <div className="App">
      <Dinner dishName="Nahari" sweetDish="Kheer"/>

      <hr/>

      <Dinner dishName="Biryani" sweetDish="Jaleebi"/>

      <hr/>
      
      <Dinner dishName="Karahi" sweetDish="Gajar Ka Halwa"/>


    </div>

  );
}

export default App;
