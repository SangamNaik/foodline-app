import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../action';
import './AvailableMeals.css';

const AvailableMeals = () => {
  const [mealsToShow, setMealsToShow] = useState([]);
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const pageNumber = useSelector((state) => state.pageNumber);
  useEffect(() => {
    if (pageNumber.data.length > 0) {
      setPage(+pageNumber.data);
    }
  }, [dispatch, pageNumber]);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const {
    data: { meals },
  } = useSelector((state) => state.data);

  const selectedFilter = useSelector((state) => state.filter);
  useEffect(() => {
    if (selectedFilter.data.length > 0) {
      setFilter(selectedFilter.data);
    }
  }, [dispatch, selectedFilter]);

  useEffect(() => {
    if (meals) {
      if (filter === 'All') {
        setMealsToShow(meals);
      } else {
        setMealsToShow(
          meals.filter((meal) => meal.labels[0] === filter.toLowerCase())
        );
      }
    }
  }, [meals, filter]);

  useEffect(() => {
    if (meals) {
      setMealsToShow(meals.slice((page - 1) * 3, page * 3));
    }
  }, [meals, page]);

  return (
    <div className="available_meals-container">
      {mealsToShow.length > 0 ? '' : <p>No Meals</p>}

      {mealsToShow &&
        mealsToShow.map((item) => {
          return (
            <article key={item.id} className="meal">
              <img src={item.img} alt={item.id} />
              <div className="meal__details">
                <div className="food">
                  <span className="meal__type">{item.title}</span>
                  <h2 className="meal__title">{item.title}</h2>
                  <span>
                    <strong>Starter:</strong>
                    {item.starter}
                  </span>
                  <span>
                    <strong>Desert:</strong>
                    {item.desert}
                  </span>
                  <span>
                    <strong>Selected drink:</strong>
                    {item.drinks[0].title}
                  </span>
                </div>
                <div className="drink">
                  {item.drinks &&
                    item.drinks.map((item) => (
                      <span key={item.id}>{item.title}</span>
                    ))}
                </div>
              </div>
              <div className="price">
                <span>${item.price}</span>
                <button>Select</button>
              </div>
            </article>
          );
        })}
    </div>
  );
};

export default AvailableMeals;
