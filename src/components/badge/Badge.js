import React from 'react';

import "./badge.scss";

const Badge = ({content, type}) => {
  return (
    <div className={`badge badge-${type}`}>
      {content}
    </div>
  );
}

export default Badge;
