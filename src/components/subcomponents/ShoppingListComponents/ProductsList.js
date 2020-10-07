import React from "react";
import Product from "./Product";

const ProductsList = (props) => {
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
    <section className="products-list">
      <h3 className="products-list__title">shopping list</h3>
      {props.shoppingList.length !== 0 ? (
        <ol className="products-list__products">{list}</ol>
      ) : (
        <p className="info">Unfortunately your shopping list is empty</p>
      )}
    </section>
  );
};

export default ProductsList;
