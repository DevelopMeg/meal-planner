import React from "react";

const Product = (props) => {
  const { id, name, count } = props.item;

  return (
    <li id={id} className="product">
      <div className="product__box-btn">
        <button
          className="product__delete"
          onClick={props.handleDeleteProductList}
        >
          X
        </button>
        <button
          className="product__edit"
          onClick={props.handleOpenEditProductList}
        >
          <i className="fas fa-pencil-alt product__edit-icon "></i>
        </button>
      </div>

      <div className="product__box-info">
        <p className="product__name">{name}</p>
        <p className="product__count">{`(${count})`}</p>
      </div>
    </li>
  );
};

export default Product;
