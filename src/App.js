import React from 'react';
import NavBar from './components/layout/NavBar/NavBar';
import SideBar from './components/layout/SideBar/SideBar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="navbar__container">
        <NavBar />
      </div>
      <div className="main__container">
        Main
      </div>
      <div className="sidebar__container">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
