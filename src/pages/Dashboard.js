import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import statusCards from "../assets/JsonData/status-card-data.json";
import StatusCard from '../components/status-card/StatusCard';
import Table from '../components/table/Table';
import Badge from '../components/badge/Badge';
import ThemeAction from "../redux/action/ThemeAction";

//--- Chart Options
const chartOptions = {
  series : [{
    name: "Online Customers",
    data: [40, 20, 70, 20, 90, 30, 80, 36, 91, 60]
  }, {
    name: "Store Customers",
    data: [40, 70, 30, 80, 40, 16, 40, 20, 51, 10]
  }],
  option: {
    color: ['#6AB04C', '#2980B9'],
    chart: { background: 'transparent' },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec']
    },
    legend: { position: 'top', horizontalAlign: 'left' },
    grid: { show: false },
    tooltip: { enabled: false }
  }
}

//---- Top Customers
const topCustomers = {
  head: ['user', 'total orders', 'total spending'],
  body: [
    {
      "username": "john doe",
      "order": "490",
      "price": "$15,870"
    },
    {
      "username": "frank iva",
      "order": "250",
      "price": "$9,251"
    },
    {
      "username": "anthony baker",
      "order": "120",
      "price": "$10,620"
    },
    {
      "username": "frank iva",
      "order": "110",
      "price": "$9,251"
    },
    {
      "username": "anthony baker",
      "order": "80",
      "price": "$8,840"
    },
    {
      "username": "john doe",
      "order": "30",
      "price": "$1,870"
    }
  ]
}

const renderCustomersHead = (item, i) => (
  <th key={i}>{item}</th>
);

const renderCustomersBody = (item, i) => (
  <tr key={i}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
);

//------ Latest Orders
const latestOrders = {
  head: ['order id', 'user', 'total price', 'date', 'status'],
  body: [
    {
      id: '#0D1712',
      user: 'frank iva',
      date: '1 Jan 2022',
      price: '$400',
      status: 'paid'
    },
    {
      id: '#0D1713',
      user: 'anthony baker',
      date: '7 Feb 2022',
      price: '$900',
      status: 'refund'
    },
    {
      id: '#0D1711',
      user: 'john doe',
      date: '17 Jun 2021',
      price: '$900',
      status: 'pending'
    },
    {
      id: '#0D1713',
      user: 'anthony baker',
      date: '7 Feb 2022',
      price: '$900',
      status: 'shipping'
    },
    {
      id: '#0D1711',
      user: 'john doe',
      date: '17 Jun 2021',
      price: '$900',
      status: 'refund'
    }
  ]
};

const orderStatus = {
  "shipping": "primary",
  "pending": "warning",
  "paid": "success",
  "refund": "danger"
};

const renderOrdersHead = (item, i) => (
  <th key={i}>{item}</th>
);

const renderOrdersBody = (item, i) => (
  <tr key={i}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status}/>
    </td>
  </tr>
);

const Dashboard = () => {
  const mode = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ThemeAction.getTheme());
  }, [dispatch]);
  
  return (
    <div>
      <h2 className='page-header'>Dashboard</h2>
      <div className='row'>
        <div className='col-6 status'>
          <div className='row'>
            {statusCards.map((item, i) => (
              <div className='col-6' key={i}>
                <StatusCard icon={item.icon} count={item.count} title={item.title} />
              </div>
            ))}
          </div>
        </div>
        <div className='col-6'>
          <div className='card full-hight'>
            <Chart 
              options={mode === 'theme-mode-dark' ? {
                ...chartOptions.option,
                theme: { mode: 'dark' }
              } : {
                ...chartOptions.option,
                theme: { mode: 'light' }
              }} 
              series={chartOptions.series} 
              type='line' height='100%' 
            />
          </div>
        </div>
        <div className='col-4'>
          <div className='card'>
            <div className='card__header'>
              <h3>Top Costumers</h3>
            </div>
            <div className='card__body'>
              <Table 
                headData={topCustomers.head} 
                renderHead={(item, i) => renderCustomersHead(item, i)} 
                bodyData={topCustomers.body} renderBody={(item, i) => renderCustomersBody(item, i)}/>
            </div>
            <div className='card__footer'>
              <Link to="/customers">View all</Link>
            </div>
          </div>
        </div>
        <div className='col-8'>
          <div className='card'>
            <div className='card__header'>
              <h3>latest orders</h3>
            </div>
            <div className='card__body'>
            <Table 
                headData={latestOrders.head} 
                renderHead={(item, i) => renderOrdersHead(item, i)} 
                bodyData={latestOrders.body} renderBody={(item, i) => renderOrdersBody(item, i)}/>
            </div>
            <div className='card__body'>
              <Link to="/">View all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
