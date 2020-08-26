import React from "react";

const MainStructureAddEditDish = (props) => {
  const {
    categoryDish,
    nameDish,
    ingredient,
    ingredients,
    kcal,
  } = props.infoDish;

  const listIngredients = ingredients.map((item, id) => {
    return (
      <li key={id} id={item.id}>
        {item.name}
        <button onClick={props.handleDeleteIngredients}>X</button>
      </li>
    );
  });

  const optionMeals = props.mealsSet.map((item, id) => {
    return (
      <option key={id} value={item}>
        {item}
      </option>
    );
  });

  return (
    <>
      <h3>{props.titleForm}</h3>
      <div>
        <label>Category of dish:</label>
        <select
          value={categoryDish}
          onChange={props.handleChangeChooseCategory}
          required
          disabled={props.disabledCategory}
        >
          <option value=""></option>
          {optionMeals}
        </select>
      </div>

      <label htmlFor="nameDish">Name of dish:</label>
      <input
        type="text"
        id="nameDish"
        name="nameDish"
        value={nameDish}
        onChange={props.handleChangeValueInfoDish}
        required
      />
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <input
          type="text"
          id="ingredients"
          name="ingredient"
          value={ingredient}
          onChange={props.handleChangeValueInfoDish}
        />
        <button
          onClick={props.handleAddIngredients}
          disabled={!ingredient ? true : false}
        >
          add
        </button>
        {ingredients.length !== 0 ? <ul>{listIngredients}</ul> : null}
      </div>
      <label htmlFor="kcal">Kcal:</label>
      <input
        type="number"
        id="kcal"
        name="kcal"
        min="0"
        value={kcal}
        onChange={props.handleChangeValueInfoDish}
      />

      <input
        type="submit"
        value={props.titleBtnSubmit}
        disabled={ingredient ? true : false}
      />
    </>
  );
};

export default MainStructureAddEditDish;
