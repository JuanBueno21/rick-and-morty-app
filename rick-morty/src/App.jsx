import './App.css';
import React from 'react';
import Home from './components/Home/home'
import Context from './context/context';

function App() {

  return (
    <Context>
      <Home />
    </Context>

  );
}
export default App;