import React from 'react';
import { paginationData } from '../../action';
import './Pagination.css';
import { useDispatch } from 'react-redux';

const Pagination = () => {
  const dispatch = useDispatch();
  // const { data } = useSelector((state) => state.data);

  const fetchPage = (e) => {
    dispatch(paginationData(e.target.innerText));
  };

  // const { data: paginatedData } = useSelector((state) => state.paginatedData);
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
