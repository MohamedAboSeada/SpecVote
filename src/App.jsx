import React from 'react';
import Specs from './components/Specs';
import Inputs from './components/Inputs';
import './App.css';
import { SpecsProvider } from './components/SpecsContext';

function App() {
  return (
    <SpecsProvider>
      <div className="container">
        <h2 className="logo">البقاء للاقوى</h2>
        <Inputs />
        <Specs />
      </div>
    </SpecsProvider>
  );
}

export default App;
