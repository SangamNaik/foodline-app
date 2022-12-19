import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './filters.css';
import { getData, getFilter } from './../../action';

const Filters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const {
    data: { labels },
  } = useSelector((state) => state.data);

  const selectedFilter = (e) => {
    dispatch(getFilter(e.target.innerText));
  };

  return (
    <div className="filter-container">
      <div className="tags" onClick={selectedFilter}>
        All
      </div>
      {labels &&
        labels.map((item) => {
          return (
            <div key={item.id} className="tags" onClick={selectedFilter}>
              {item.label}
            </div>
          );
        })}
    </div>
  );
};

export default Filters;
