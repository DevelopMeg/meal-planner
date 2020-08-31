import React from "react";

const AddProduct = (props) => {
  const { name, count } = props.infoProduct;

  return (
    <form onSubmit={props.handleAddProductToShoppingList(name, count, e)}>
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
          value="add"
          disabled={!name || !count ? true : false}
        />
      </div>
    </form>
  );
};

export default AddProduct;
