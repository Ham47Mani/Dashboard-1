import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import ThemeAction from "../../redux/action/ThemeAction";

import "./thememenu.scss";

const mode_setting = [
  {
    id: 'light',
    name: 'Light',
    background: 'light-backgound',
    class: 'theme-mode-light'
  },
  {
    id: 'dark',
    name: 'Dark',
    background: 'dark-backgound',
    class: 'theme-mode-dark'
  }
];
const color_setting = [
  {
    id: 'blue',
    name: 'Blue',
    background: 'blue-color',
    class: 'theme-color-blue'
  },
  {
    id: 'red',
    name: 'Red',
    background: 'red-color',
    class: 'theme-color-red'
  },
  {
    id: 'green',
    name: 'Green',
    background: 'green-color',
    class: 'theme-color-green'
  },
  {
    id: 'cyan',
    name: 'Cyan',
    background: 'cyan-color',
    class: 'theme-color-cyan'
  },
  {
    id: 'orange',
    name: 'Orange',
    background: 'orange-color',
    class: 'theme-color-orange'
  }
];

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener('mousedown', (e) => {
    //--- User Click Toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      //--- User Click Outside toggle & content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
}

const ThemeMenu = () => {
  const dispatch = useDispatch();
  const menu_ref = useRef(null);
  const menu_toggle_ref = useRef(null);

  clickOutsideRef(menu_ref, menu_toggle_ref);
  const setActiveMenu = () => menu_ref.current.classList.add("active");
  const closeMenu = () => menu_ref.current.classList.remove("active");

  const [curMode, setCurMode] = useState('light');
  const [curColor, setCurColor] = useState('blue');

  const setMode = mode => {
    setCurMode(mode.id);
    localStorage.setItem("themeMode", mode.class);
    dispatch(ThemeAction.setMode(mode.class));
  }
  const setColor = color => {
    setCurColor(color.id);
    localStorage.setItem("colorMode", color.class);
    dispatch(ThemeAction.setColor(color.class));
  }

  useEffect(() => {
    const theme = mode_setting.find(e => e.class === localStorage.getItem('themeMode'));
    setCurMode(theme !== undefined ? theme.id : 'light');

    const color = color_setting.find(e => e.class === localStorage.getItem('colorMode'));
    setCurColor(color !== undefined ? color.id: 'blue');
  }, []);

  return (
    <div>
      <button className='dropdown__toggle' ref={menu_toggle_ref} onClick={setActiveMenu}>
        <i className='bx bx-palette'></i>
      </button>
      <div className='theme-menu' ref={menu_ref}>
        <h4>Theme Setting</h4>
        <button className='theme-menu__close' onClick={closeMenu}>
          <i className='bx bx-x'></i>
        </button>
        <div className='theme-menu__select'>
          <span>Choose mode</span>
          <ul className='mode-list'>
            {
              mode_setting.map((item, i) => (
                <li key={i} onClick={() => setMode(item)}>
                  <div className={`mode-list__color ${item.background} ${item.id === curMode ? 'active' : ''}`}>
                    <i className='bx bx-check'></i>
                  </div>
                  <span>{item.name}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='theme-menu__select'>
          <span>Choose color</span>
          <ul className='mode-list'>
            {
              color_setting.map((item, i) => (
                <li key={i} onClick={() => setColor(item)}>
                  <div className={`mode-list__color ${item.background} ${item.id === curColor ? 'active' : ''}`}>
                    <i className='bx bx-check'></i>
                  </div>
                  <span>{item.name}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ThemeMenu;
