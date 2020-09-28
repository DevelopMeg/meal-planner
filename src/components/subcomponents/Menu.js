import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import iconOne from "../../images/menu-item-one.png";
import iconTwo from "../../images/menu-item-two.png";
import iconThree from "../../images/menu-item-three.png";
import iconFour from "../../images/menu-item-four.png";

const Menu = (props) => {
  const location = useLocation().pathname;

  const menuTxt = [
    { path: "/plan-meals", text: "plan meals", icon: iconOne },
    { path: "/shopping-list", text: "shopping list", icon: iconTwo },
    { path: "/list-dishes", text: "list of dishes", icon: iconThree },
    {
      path: "/structure-settings",
      text: "settings",
      icon: iconFour,
    },
  ];

  const menuItem = menuTxt.map((item, id) => {
    return (
      <li
        key={id}
        className={location !== "/" ? "menu__item" : "home-menu__item"}
        onClick={props.handleClearOpenMenuItem}
      >
        <NavLink
          to={item.path}
          className={
            location !== "/" ? "menu__link link" : "home-menu__link link"
          }
        >
          {location !== "/" && (
            <img src={item.icon} alt={item.text} className="menu__icon" />
          )}
          <span className={location !== "/" ? "menu__text" : "home-menu__text"}>
            {item.text}{" "}
            {item.text === "shopping list" ? (
              <span className="menu__link--amount-cart">{`(${props.shoppingListLength})`}</span>
            ) : null}
          </span>
        </NavLink>
      </li>
    );
  });

  return (
    <nav className={location !== "/" ? "menu" : "home-menu"}>
      <ul
        className={
          location !== "/" ? "menu__item-list" : "home-menu__item-list"
        }
      >
        {menuItem}
      </ul>
    </nav>
  );
};

export default Menu;
