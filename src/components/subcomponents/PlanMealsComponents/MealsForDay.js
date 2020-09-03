import React from "react";
import MealForDay from "./MealForDay";
import CountCalories from "./CountCalories";

const MealsForDay = (props) => {
  const filterDishesForDay = props.setDishes.filter((setDish) => {
    if (typeof setDish.setForDay === "string") {
      return setDish.setForDay === props.chooseDayToSetDishes;
    } else {
      const filterDaysInDish = setDish.setForDay.filter((day) => {
        return day === props.chooseDayToSetDishes;
      });
      if (filterDaysInDish.length === 0) {
        return null;
      } else {
        return setDish;
      }
    }
  });

  const meals = props.mealsSet.map((meal, id) => {
    const completeSetMealsInDay = filterDishesForDay.filter((dish) => {
      return meal === dish.categoryDish;
    });

    return completeSetMealsInDay.length !== 0 ? (
      <MealForDay
        key={id}
        nameMeal={meal}
        completeSetMealsInDay={completeSetMealsInDay}
        handleAddIngredientToShoppingList={
          props.handleAddIngredientToShoppingList
        }
        shoppingList={props.shoppingList}
      />
    ) : null;
  });

  return (
    <>
      {props.setDishes.length !== 0 && filterDishesForDay.length !== 0 ? (
        <div>
          {meals}
          <CountCalories
            filterDishesForDay={filterDishesForDay}
            chooseDayToSetDishes={props.chooseDayToSetDishes}
          />
        </div>
      ) : (
        <h4>{`Unfortunately your plan for ${props.chooseDayToSetDishes} is empty`}</h4>
      )}
    </>
  );
};

export default MealsForDay;
