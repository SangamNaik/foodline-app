import React from 'react';
import { paginationData } from '../../action';
import './Pagination.css';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.paginationData);

  const fetchPage = (e) => {
    dispatch(paginationData(e.target.innerText));
  };

  return (
    <div className="pagination-container">
      <button onClick={fetchPage} className="page">
        1
      </button>
      <button onClick={fetchPage} className="page">
        2
      </button>
      <button onClick={fetchPage} className="page">
        3
      </button>
      <button onClick={fetchPage} className="page">
        4
      </button>
    </div>
  );
};

export default Pagination;
