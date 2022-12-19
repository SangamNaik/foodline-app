import React from 'react';
import './Pagination.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from './../../action';

const Pagination = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.data);

  const { meals } = data;

  const fetchPage = (e) => {
    dispatch(getPage(e.target.innerText));
  };

  return (
    <div className="pagination-container">
      {meals &&
        meals.length > 3 &&
        [...Array(Math.ceil(meals.length / 3))].map((_, i) => {
          return (
            <button onClick={fetchPage} className="page" key={i + 1}>
              {i + 1}
            </button>
          );
        })}
    </div>
  );
};

export default Pagination;
