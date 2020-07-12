import React from 'react';
import NavBar from '../NavBar/NavBar';
import SideBar from '../SideBar/SideBar';
import './MainLayout.scss';

const MainLayout = ({ children }) => (
  <div className="main__layout">
    <div className="navbar__container">
      <NavBar />
    </div>
    <div className="main__container">
      {children}
    </div>
    <div className="sidebar__container">
      <SideBar />
    </div>

  </div>
);

export default MainLayout;
