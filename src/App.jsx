// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from './Components/Hero';
import 'tailwindcss/tailwind.css';


    
    
  

function App() {
  return (
    <div className="App h-screen w-screen bg-slate-800 flex justify-center items-center p-5   ">
      {/* <CurrencyConverter /> */}
      <Hero></Hero>
    </div>
  );
}

export default App;
