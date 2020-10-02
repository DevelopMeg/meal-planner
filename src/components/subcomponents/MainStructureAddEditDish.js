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
      <li key={id} id={item.id} className="form-dish__ingredient">
        {item.name}
        <button
          className="form-dish__btn-delete-ingredient"
          onClick={props.handleDeleteIngredients}
        >
          X
        </button>
      </li>
    );
  });

  const optionMeals = props.mealsSet.map((item, id) => {
    return (
      <option key={id} value={item} className="form-dish__category">
        {item}
      </option>
    );
  });

  return (
    <>
      <div className="form-dish__box-image"></div>

      <div className="form-dish__structure-box">
        <h3 className="form-dish__title">{props.titleForm}</h3>

        <div className="form-dish__categories-box">
          <label className="form-dish__label">Category of dish:</label>

          <select
            className="form-dish__categories"
            value={categoryDish}
            onChange={props.handleChangeChooseCategory}
            required
            disabled={props.disabledCategory}
          >
            <option value="" className="form-dish__category"></option>
            {props.mealsSet.length !== 0 && optionMeals}
          </select>
        </div>

        <div className="form-dish__box">
          <label className="form-dish__label" htmlFor="nameDish">
            Name of dish:
          </label>

          <input
            type="text"
            id="nameDish"
            name="nameDish"
            className="form-dish__input form-dish__input--name"
            value={nameDish}
            onChange={props.handleChangeValueInfoDish}
            required
          />
        </div>

        <div className="form-dish__ingredients-box">
          <label
            className="form-dish__label form-dish__label--ingredient"
            htmlFor="ingredients"
          >
            Ingredients:
          </label>

          <input
            type="text"
            id="ingredients"
            name="ingredient"
            className="form-dish__input form-dish__input--ingredient"
            value={ingredient}
            onChange={props.handleChangeValueInfoDish}
          />

          <button
            className="form-dish__btn-add-ingredient"
            onClick={props.handleAddIngredients}
            disabled={!ingredient ? true : false}
          >
            add
          </button>

          {ingredients.length !== 0 ? (
            <ul className="form-dish__ingredients-list">{listIngredients}</ul>
          ) : null}
        </div>

        <div className="form-dish__box ">
          <label className="form-dish__label" htmlFor="kcal">
            Kcal:
          </label>

          <input
            type="number"
            id="kcal"
            name="kcal"
            min="0"
            max="5000"
            pattern=".{0,5000}"
            title="1 to 5000 characters"
            className="form-dish__input form-dish__input--calories"
            value={kcal}
            onChange={props.handleChangeValueInfoDish}
          />
        </div>

        <input
          className="form-dish__submit"
          type="submit"
          value={props.titleBtnSubmit}
          disabled={ingredient ? true : false}
        />
      </div>
    </>
  );
};

export default MainStructureAddEditDish;
