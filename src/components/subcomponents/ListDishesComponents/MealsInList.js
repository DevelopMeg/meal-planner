import React from "react";
import { NavLink } from "react-router-dom";

const MealsInList = (props) => {
  const meals = props.mealsSet.map((item, id) => {
    return (
      <li key={id} onClick={props.handleShowListDishesInMeal}>
        <NavLink to={`/list-dishes/${item}`} id={id}>
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

export default MealsInList;
