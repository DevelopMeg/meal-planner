import React from "react";
import MainStructureDish from "../MainStructureDish";

const MealForDay = (props) => {
  const meal = props.completeSetMealsInDay.map((dish, id) => {
    return (
      <div key={id}>
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
    <section>
      <h3>{props.nameMeal}</h3>
      {meal}
    </section>
  );
};

export default MealForDay;
