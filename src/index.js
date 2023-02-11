import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/layout/Layout';
import { Provider } from 'react-redux';
import { store } from './redux/store';

//--- Import Style Files
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import './index.scss';
import "./sass/theme.scss";

//--- Title Of Website
document.title = "Dashboard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout/>
    </React.StrictMode>
  </Provider>
);
