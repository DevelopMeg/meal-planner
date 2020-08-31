import React from "react";
import Menu from "../subcomponents/Menu";

const HomePage = (props) => {
  return <Menu shoppingListLength = {
    props.shoppingListLength
  }
  />;
};

export default HomePage;