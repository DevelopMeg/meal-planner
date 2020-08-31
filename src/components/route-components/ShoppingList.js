import React from "react";
import Menu from "../subcomponents/Menu";
import AddProduct from "../subcomponents/ShoppingListComponents/AddProduct";
import ProductList from "../subcomponents/ShoppingListComponents/ProductList";

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
          statusOpenEditProduct={props.statusOpenEditProduct}
          idEditProduct={props.idEditProduct}
          handleEditProductList={props.handleEditProductList}
        />

        <ProductList
          shoppingList={props.shoppingList}
          handleOpenEditProductList={props.handleOpenEditProductList}
          handleDeleteProductList={props.handleDeleteProductList}
        />
      </section>
    </>
  );
};

export default ShoppingList;
