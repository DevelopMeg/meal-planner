import React from "react";
import { NavLink } from "react-router-dom";

const MealsOfWeek = (props) => {
  const meals = props.mealsSet.map((item, id) => {
    return (
      <li
        key={id}
        className="meals-set-dishes__item"
        onClick={(e) => {
          props.handleChooseMealToSet(e);
          props.handleShowDishes(e);
        }}
      >
        <NavLink
          className="meals-set-dishes__link link"
          to={`/set-dishes-for-day/${props.chooseDayToSetDishes}/${item}`}
        >
          {item}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className="meals-set-dishes">
      <ul className="meals-set-dishes__item-list">{meals}</ul>
    </nav>
  );
};

export default MealsOfWeek;
