import React, { useEffect, useState } from 'react';
import './App.css';
import Filters from './components/filters/Filters';
import AvailableMeals from './components/availableMeals/AvailableMeals';
import Pagination from './components/pagination/Pagination';
import Cart from './components/cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const { data } = useSelector((state) => state.data);

  const { labels, meals } = data;

  // console.log(labels, meals);

  return (
    <div className="container">
      <section className="left-container">
        {labels && <Filters tags={labels} />}
        {meals && <AvailableMeals meals={meals} />}
        <Pagination />
      </section>
      <section className="right-container">
        <Cart />
      </section>
    </div>
  );
};

export default App;
