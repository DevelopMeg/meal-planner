import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  const list = props.shoppingList.map((item, id) => {
    return (
      <Product
        key={id}
        item={item}
        handleDeleteProductList={props.handleDeleteProductList}
        handleOpenEditProductList={props.handleOpenEditProductList}
      />
    );
  });

  return (
    <section>
      <h3>shopping list</h3>
      {props.shoppingList.length !== 0 ? <ol>{list}</ol> : null}
    </section>
  );
};

export default ProductList;
