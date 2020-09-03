import React from "react";
import { NavLink } from "react-router-dom";

const MealsOfWeek = (props) => {
  const meals = props.mealsSet.map((item, id) => {
    return (
      <li
        key={id}
        onClick={(e) => {
          props.handleChooseMealToSet(e);
          props.handleShowDishes(e);
        }}
      >
        <NavLink
          to={`/set-dishes-for-day/${props.chooseDayToSetDishes}/${item}`}
        >
          {item}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul>{meals}</ul>
    </nav>
  );
};

export default MealsOfWeek;
