import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard/dashboard';
import Header from './Header/header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
