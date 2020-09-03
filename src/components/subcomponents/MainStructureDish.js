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
      <div key={id} id={ingredient.id}>
        <p>{ingredient.name}</p>
        {props.name === "plan-meals" ? (
          <button
            onClick={() => {
              props.handleAddIngredientToShoppingList(
                props.dish.nameDish,
                ingredient.name,
                ingredient.id
              );
            }}
            disabled={added ? true : false}
          >
            add to shopping list
            <i className="fas fa-clipboard-list"></i>
          </button>
        ) : null}
      </div>
    );
  });

  return (
    <>
      <p>Name of dish: {props.dish.nameDish}</p>
      {props.dish.ingredients.length !== 0 ? (
        <div>Ingredients: {ingredientsList}</div>
      ) : null}
      {props.dish.kcal ? <p>Kcal: {props.dish.kcal}</p> : null}
    </>
  );
};

export default MainStructureDish;
