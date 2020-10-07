import React from "react";
import Menu from "../subcomponents/Menu";
import AddProduct from "../subcomponents/ShoppingListComponents/AddProduct";
import ProductsList from "../subcomponents/ShoppingListComponents/ProductsList";
import ImagesList from "../subcomponents/ImagesList";

const ShoppingList = (props) => {
  return (
    <>
      <Menu
        shoppingListLength={props.shoppingList.length}
        handleClearOpenMenuItem={props.handleClearOpenMenuItem}
      />
      <section className="section-shopping-list">
        <AddProduct
          infoProduct={props.infoProduct}
          shoppingList={props.shoppingList}
          handleAddProductToShoppingList={props.handleAddProductToShoppingList}
          handleChangeInfoProduct={props.handleChangeInfoProduct}
          statusOpenEditProduct={props.statusOpenEditProduct}
          idEditProduct={props.idEditProduct}
          handleEditProductList={props.handleEditProductList}
        />

        <ImagesList name="shopping-list" />

        <ProductsList
          shoppingList={props.shoppingList}
          handleOpenEditProductList={props.handleOpenEditProductList}
          handleDeleteProductList={props.handleDeleteProductList}
        />
      </section>
    </>
  );
};

export default ShoppingList;
