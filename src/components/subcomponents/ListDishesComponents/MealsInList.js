import React from "react";
import { NavLink } from "react-router-dom";

const MealsInList = (props) => {
  const meals = props.mealsSet.map((item, id) => {
    return (
      <li
        key={id}
        className="meals-list-dishes__item"
        onClick={props.handleShowListDishesInMeal}
      >
        <NavLink
          to={`/list-dishes/${item}`}
          id={id}
          className="meals-list-dishes__link link"
        >
          {item}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className="meals-list-dishes">
      <ul className="meals-list-dishes__item-list">{meals}</ul>
    </nav>
  );
};

export default MealsInList;
