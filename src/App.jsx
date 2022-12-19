import React from 'react';
import './App.css';
import Filters from './components/filters/Filters';
import AvailableMeals from './components/availableMeals/AvailableMeals';
import Pagination from './components/pagination/Pagination';
import Cart from './components/cart/Cart';

const App = () => {
  return (
    <div className="container">
      <section className="left-container">
        <Filters />
        <AvailableMeals />
        <Pagination />
      </section>
      <section className="right-container">
        <Cart />
      </section>
    </div>
  );
};

export default App;
