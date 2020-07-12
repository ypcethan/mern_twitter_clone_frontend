import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Bookmarks from './components/pages/Bookmarks/Bookmarks';
import Messages from './components/pages/Messages/Messages';
import Profile from './components/pages/Profile/Profile';
import Register from './components/pages/Register/Register';
import AppRoute from './components/layout/AppRoute/AppRoute';
import MainLayout from './components/layout/MainLayout/MainLayout';
import AuthLayout from './components/layout/AuthLayout/AuthLayout';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <AppRoute
            path="/"
            exact
            component={Home}
            layout={MainLayout}
          />
          <AppRoute
            path="/register"
            exact
            component={Register}
            layout={AuthLayout}
          />
          <AppRoute
            path="/bookmarks"
            exact
            component={Bookmarks}
            layout={MainLayout}
          />
          <AppRoute path="/messages" exact component={Messages} layout={MainLayout} />
          <AppRoute path="/profile" exact component={Profile} layout={MainLayout} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
