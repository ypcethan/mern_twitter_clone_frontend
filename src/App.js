import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';
import SideBar from './components/layout/SideBar/SideBar';
import Home from './components/pages/Home/Home';
import Bookmarks from './components/pages/Bookmarks/Bookmarks';
import Messages from './components/pages/Messages/Messages';
import Profile from './components/pages/Profile/Profile';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navbar__container">
          <NavBar />
        </div>
        <div className="main__container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/bookmarks" exact component={Bookmarks} />
            <Route path="/messages" exact component={Messages} />
            <Route path="/profile" exact component={Profile} />
          </Switch>
        </div>
        <div className="sidebar__container">
          <SideBar />
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
