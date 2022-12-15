import React from 'react';
import './filters.css';
// import Data from '../../data.json';

const Filters = ({ tags }) => {
  // const { labels } = Data;

  return (
    <div className="filter-container">
      <div className="tags">All</div>
      {tags.map((item) => {
        return (
          <div key={item.id} className="tags">
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
