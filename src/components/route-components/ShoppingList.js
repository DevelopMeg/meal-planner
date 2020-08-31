import React from "react";
import Menu from "../subcomponents/Menu";
import AddProduct from "../subcomponents/ShoppingListComponents/AddProduct";

const ShoppingList = (props) => {
  return (
    <>
      <Menu />
      <section>
        <AddProduct
          infoProduct={props.infoProduct}
          shoppingList={props.shoppingList}
          handleAddProductToShoppingList={props.handleAddProductToShoppingList}
          handleChangeInfoProduct={props.handleChangeInfoProduct}
        />
      </section>
    </>
  );
};

export default ShoppingList;
