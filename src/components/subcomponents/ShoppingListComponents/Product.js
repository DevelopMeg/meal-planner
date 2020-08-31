import React from "react";

const Product = (props) => {
  const { id, name, count } = props.item;

  return (
    <li id={id}>
      <button onClick={props.handleDeleteProductList}>X</button>
      <button onClick={props.handleOpenEditProductList}>
        <i className="fas fa-pencil-alt"></i>
      </button>
      <p>{name}</p>
      <p>{count}</p>
    </li>
  );
};

export default Product;
