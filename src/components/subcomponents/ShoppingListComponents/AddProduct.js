import React from "react";

const AddProduct = (props) => {
  const { name, count } = props.infoProduct;

  const conditionInputDisabled =
    props.statusOpenEditProduct &&
    props.shoppingList[props.idEditProduct].added !== undefined;

  return (
    <form
      onSubmit={
        !props.statusOpenEditProduct
          ? (e) => props.handleAddProductToShoppingList(name, count, e)
          : props.handleEditProductList
      }
    >
      <div>
        <label htmlFor="nameProduct">name of product in shopping list</label>
        <input
          id="nameProduct"
          type="text"
          name="name"
          disabled={conditionInputDisabled ? true : false}
          value={name}
          onChange={props.handleChangeInfoProduct}
        />
      </div>

      <div>
        <label>count of product</label>
        <input
          id="countProduct"
          type="number"
          name="count"
          min="0"
          value={count}
          onChange={props.handleChangeInfoProduct}
        />

        <input
          type="submit"
          value={!props.statusOpenEditProduct ? "add" : "edit"}
          disabled={!name || !count ? true : false}
        />
      </div>
    </form>
  );
};

export default AddProduct;
