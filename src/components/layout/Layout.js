import React, { useEffect, useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import AllRoutes from '../AllRoutes';
import Sidebar from '../sidebar/Sidebar';
import Topnav from '../topnav/Topnav';
import { useDispatch, useSelector } from 'react-redux';
import ThemeAction from "../../redux/action/ThemeAction";

import "./layout.scss";

const Layout = (props) => {
  const [sideOpen, setSideOpen] = useState(false);
  const themeReducer = useSelector(state => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const theme = localStorage.getItem('themeMode');
    dispatch(ThemeAction.setMode(theme));
    const color = localStorage.getItem('colorMode');
    dispatch(ThemeAction.setColor(color));

    if (window.innerWidth < 768) {
      setSideOpen(false);
    } else {
      setSideOpen(true);
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className={`layout ${!sideOpen ? "close" : ""} ${themeReducer.mode} ${themeReducer.color}`} >
        <Sidebar {...props} setSideOpen={setSideOpen} sideOpen={sideOpen}/>
        <div className='layout__content'>
          <Topnav/>
          <div className='layout__content__main'>
            <AllRoutes/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
