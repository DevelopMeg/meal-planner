import React from "react";
import { NavLink } from "react-router-dom";

const Menu = (props) => {
  const menuTxt = [
    { path: "/plan-meals", text: "plan meals" },
    { path: "/shopping-list", text: "shopping list" },
    { path: "/list-dishes", text: "list of dishes" },
    { path: "/structure-settings", text: "meal structure settings" },
  ];

  const menuItem = menuTxt.map((item, id) => {
    return (
      <li
        key={id}
        className="menu__item"
        onClick={props.handleClearOpenMenuItem}
      >
        <NavLink to={item.path} className="menu__link">
          {item.text}
        </NavLink>
        {item.text === "shopping list" ? props.shoppingListLength : null}
      </li>
    );
  });

  return (
    <nav className="menu">
      <ul className="menu__item-list">{menuItem}</ul>
    </nav>
  );
};

export default Menu;
