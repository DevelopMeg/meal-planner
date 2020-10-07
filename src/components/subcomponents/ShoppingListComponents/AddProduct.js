import React from "react";

const AddProduct = (props) => {
  const { name, count } = props.infoProduct;

  const conditionInputDisabled =
    props.statusOpenEditProduct &&
    props.shoppingList[props.idEditProduct].added !== undefined;

  return (
    <form
      className="add-product"
      onSubmit={
        !props.statusOpenEditProduct
          ? (e) => props.handleAddProductToShoppingList(name, count, e)
          : props.handleEditProductList
      }
    >
      <div className="add-product__box">
        <label htmlFor="nameProduct" className="add-product__label">
          name of product in shopping list
        </label>
        <input
          id="nameProduct"
          type="text"
          name="name"
          className="add-product__input"
          disabled={conditionInputDisabled ? true : false}
          value={name}
          onChange={props.handleChangeInfoProduct}
        />
      </div>

      <div className="add-product__box">
        <label className="add-product__label">count of product</label>
        <input
          id="countProduct"
          type="number"
          name="count"
          className="add-product__input"
          min="1"
          max="99"
          pattern=".{1,99}"
          required
          title="1 to 99 characters"
          value={count}
          onChange={props.handleChangeInfoProduct}
        />
      </div>
      <input
        type="submit"
        className="add-product__submit"
        value={!props.statusOpenEditProduct ? "add" : "edit"}
        disabled={!name || !count ? true : false}
      />
    </form>
  );
};

export default AddProduct;
