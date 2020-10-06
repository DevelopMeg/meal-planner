import React from "react";
import MainStructureDish from "../MainStructureDish";

const MealForDay = (props) => {
  const meal = props.completeSetMealsInDay.map((dish, id) => {
    return (
      <div key={id} className="dish dish--plan-meals">
        <MainStructureDish
          name="plan-meals"
          dish={dish}
          handleAddIngredientToShoppingList={
            props.handleAddIngredientToShoppingList
          }
          shoppingList={props.shoppingList}
        />
      </div>
    );
  });

  return (
    <section className="meal">
      <h3 className="meal__name">{props.nameMeal}</h3>
      <div className="meal__box">{meal}</div>
    </section>
  );
};

export default MealForDay;
