import React from 'react'
import Context from './components/Context';
import Router from './components/Router';


function App() {
  return (
    <Context>
      <Router/>
    </Context>
  );
}

export default App;
