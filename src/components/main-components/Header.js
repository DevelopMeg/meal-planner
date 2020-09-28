import React from "react";
import titleIcon from "../../images/titleIcon.png";

const Header = () => {
  return (
    <header className="head">
      <h1 className="head__title">Meal Planner</h1>
      <img src={titleIcon} alt="meal" className="head__image" />
    </header>
  );
};

export default Header;
