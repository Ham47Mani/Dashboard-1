import React, { Fragment, useState } from 'react';

import "./table.scss";

const Table = ({headData, renderHead, bodyData, renderBody, limit}) => {
  const initDataShow = limit && bodyData ? bodyData.slice(0, Number(limit)) : bodyData;
  const [dataShow, setDataShow] = useState(initDataShow);
  let pages = 1;
  let range = [];
  if (limit !== undefined) {
    let page = Math.floor(bodyData.length / Number(limit));
    pages = bodyData.length % Number(limit) === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const [curPage, setCurPage] = useState(0);

  const selectPage = page => {
    const start = Number(limit) * page;
    const end = start + Number(limit);
    setDataShow(bodyData.slice(start, end));
    setCurPage(page);
  }

  return (
    <Fragment>
      <div className='table-wrapper'>
        <table>
          {
            headData && renderHead && (
              <thead>
                <tr>
                  {
                    headData.map((item, i) => renderHead(item, i))
                  }
                </tr>
              </thead>
            )
          }
          {
            <tbody>
              {
                dataShow.map((item, i) => renderBody(item, i))
              }
            </tbody>
          }
        </table>
      </div>
      {
        pages > 1 && (
          <div className='table__pagination'>
            {
              range.map((item, i) => (
                <div className={`table__pagination__item ${curPage === i ? "active" : ""}`} key={i} onClick={() => selectPage(i)}>
                  {item + 1}
                </div>
              ))
            }
          </div>
        )
      }
    </Fragment>
  );
}

export default Table;
