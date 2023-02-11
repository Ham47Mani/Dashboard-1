import React from 'react';
import Dropdown from '../dropdown/Dropdown';
import { Link } from 'react-router-dom';

//--- Import Style File
import "./topnav.scss";

import notification from "../../assets/JsonData/notification.json";
import user_menu from '../../assets/JsonData/user_menus.json';
import user_image from "../../assets/images/me.jpg";
import ThemeMenu from '../thememenu/ThemeMenu';

//------ renderNotificataionItem
const renderNotificataionItem = (item, i) => (
  <div className='notification_item' key={i}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
)

//------ Current User Info
const cur_user = {
  display_name: "Hammani B",
  image: user_image
}

//------ renderUser
const renderUserToggle = (user) => (
  <div className='topnav__right__item__user'>
    <div className='topnav__right__item__user__image'>
      <img src={user.image} alt=''/>
    </div>
    <div className='topnav__right__item__user__name'>
      {user.display_name}
    </div>
  </div>
);

//--- renderUserMenu
const renderUserMenu = (item, i) => (
  <Link to="/" key={i}>
    <div className='notification_item' key={i}>
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);



const Topnav = () => {
  return (
    <nav className='topnav'>
      <div className='topnav__search'>
        <input type="text" placeholder='Search here ...'/>
        <i className='bx bx-search'></i>
      </div>
      <div className='topnav__right'>
        <div className='topnav__right__item'>
          {/* Dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(cur_user)}
            contentData= {user_menu}
            renderItems= {(item, i) => renderUserMenu(item, i)}
          />
        </div>
        <div className='topnav__right__item'>
          {/* Dropdown here */}
          <Dropdown
            icon= "bx bx-bell"
            badge="12"
            contentData= {notification}
            renderItems={(item, i) => renderNotificataionItem(item, i)}
            renderFooter= {() => <Link to="/">View All</Link>}
          />
        </div>
        <div className='topnav__right__item'>
          <ThemeMenu/>
        </div>
      </div>
    </nav>
  );
}

export default Topnav;
