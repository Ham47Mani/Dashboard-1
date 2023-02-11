import React from 'react';

import "./sidebar.scss";

import logo from "../../assets/images/logo.png";
import sidebar_items from "../../assets/JsonData/sidebar_routes.json";
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({setSideOpen, sideOpen}) => {
  const location = useLocation();
  const activeItem = sidebar_items.findIndex(item => item.route === location.pathname);
  
  return (
    <aside className='sidebar'>
      <div className='sidebar__logo' onClick={() => setSideOpen(!sideOpen)}>
        <img src={logo} alt='company logo'/>
        <h1>HamMani</h1>
      </div>
      {
        sidebar_items.map((item, index) => (
          <SidebarItem 
            key={index}
            item={item}
            active={index === activeItem}
          />
        ))
      }
    </aside>
  );
}

export default Sidebar;

// ========================== Start Sidebar Item ==========================
const SidebarItem = ({active, item}) => {
  const activeState = active ? "active" : "";

  return (
    <div className='sidebar__item'>
      <Link to={item.route} className={`sidebar__item__inner ${activeState}`}>
        <i className={item.icon}></i>
        <span>{item.display_name}</span>
      </Link>
    </div>
  )
}
// ========================== End Sidebar Item ==========================