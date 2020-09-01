import React from "react";
import { NavLink } from "react-router-dom";

const DaysOfWeek = (props) => {
  const days = props.daysSet.map((item, id) => {
    return (
      <li key={id} onClick={props.handleOpenPlanForDay}>
        <NavLink to={`/plan-meals/${item}`} id={item}>
          {item}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul>{days}</ul>
    </nav>
  );
};

export default DaysOfWeek;
