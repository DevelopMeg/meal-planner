import React from "react";

const MainStructureDish = (props) => {
  const ingredientsList = props.dish.ingredients.map((ingredient, id) => {
    let added;

    if (props.shoppingList !== undefined) {
      props.shoppingList.forEach((product) => {
        if (product.id === ingredient.id) {
          added = product.added;
        }
      });
    }

    return (
      <div key={id} id={ingredient.id} className="ingredient">
        <p className="ingredient__name">{ingredient.name}</p>
        {props.name === "plan-meals" ? (
          <button
            className="ingredient__add-to-list"
            onClick={() => {
              props.handleAddIngredientToShoppingList(
                props.dish.nameDish,
                ingredient.name,
                ingredient.id
              );
            }}
            disabled={added ? true : false}
          >
            <i className="ingredient__btn-icon fas fa-cart-plus"></i>
          </button>
        ) : null}
      </div>
    );
  });

  return (
    <>
      <p className="dish__name">Name of dish: {props.dish.nameDish}</p>
      {props.dish.ingredients.length !== 0 ? (
        <div className="ingredients">
          <p className="ingredients__title">Ingredients:</p>
          {ingredientsList}
        </div>
      ) : null}
      {props.dish.kcal ? (
        <p className="dish__calories">Kcal: {props.dish.kcal}</p>
      ) : null}
    </>
  );
};

export default MainStructureDish;
