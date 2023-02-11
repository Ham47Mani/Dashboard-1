import React, { Fragment } from 'react';
import Table from "../components/table/Table";

import customerList from "../assets/JsonData/customers-list.json";

const customersTableHead = ['', 'name', 'email', 'phone', 'total orders', 'total spend', 'location'];
const renderCustomersHead = (item, i) => <th key={i}>{item}</th>;
const renderCustomersBody = (item, i) => (
  <tr key={i}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);

const Customers = () => {
  return (
    <Fragment>
      <h2 className='page-header'>Customers</h2>
      <div className='row'>
        <div className='col-12'>
          <div className='card'>
            <div className='card__body'>
              <Table 
                limit='10'
                headData = {customersTableHead}
                renderHead = {(item, i) => renderCustomersHead(item, i)}
                bodyData = {customerList}
                renderBody = {(item, i) => renderCustomersBody(item, i)}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Customers;
