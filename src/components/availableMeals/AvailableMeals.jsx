import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './AvailableMeals.css';

const AvailableMeals = ({ meals }) => {
  // const [updatedMeals, setUpdatedMeals] = useState([]);
  const [mealsToShow, setMealsToShow] = useState([]);

  useEffect(() => {
    setMealsToShow(meals.slice(0, 3));
  }, [meals]);

  const { data: paginationData } = useSelector((state) => state.paginatedData);

  // useEffect(() => {
  //   (() => {
  //     setUpdatedMeals(paginationData);
  //   })();
  // }, [paginationData]);

  console.log(paginationData);
  // console.log(meals);
  // console.log(updatedMeals);

  // useEffect(() => {
  //   if (
  //     meals.length > 0 &&
  //     updatedMeals.length > 0 &&
  //     meals[0].id === updatedMeals[0].id
  //   ) {
  //     setMealsToShow(updatedMeals);
  //   } else {
  //     setMealsToShow(meals);
  //   }
  // }, [meals, updatedMeals]);

  return (
    <div className="available_meals-container">
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
