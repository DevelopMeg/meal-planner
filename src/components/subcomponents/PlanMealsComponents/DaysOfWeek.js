import React from "react";
import { NavLink } from "react-router-dom";

const DaysOfWeek = (props) => {
  const days = props.daysSet.map((item, id) => {
    return (
      <li
        key={id}
        className="days-plan-meals__item"
        onClick={props.handleOpenPlanForDay}
      >
        <NavLink
          to={`/plan-meals/${item}`}
          id={item}
          className="days-plan-meals__link link"
        >
          {item}
        </NavLink>
      </li>
    );
  });

  return (
    <nav className="days-plan-meals">
      <ul className="days-plan-meals__item-list">{days}</ul>
    </nav>
  );
};

export default DaysOfWeek;
