import React from "react";

const CountCalories = (props) => {
  const dishesHaveCalories = props.filterDishesForDay.filter((dish) => {
    return dish.kcal.length !== 0;
  });

  let totalCalories = "";

  if (dishesHaveCalories.length !== 0) {
    const calories = dishesHaveCalories.map((dish) => {
      return parseInt(dish.kcal);
    });

    totalCalories = calories.reduce((a, b) => {
      return a + b;
    });
  }

  return dishesHaveCalories.length !== 0 ? (
    <h4 className="meals-for-day__calories">
      {`Total calories for ${props.chooseDayToSetDishes} day: `}
      <span className="meals-for-day__calories--amount">{totalCalories}</span>
    </h4>
  ) : null;
};

export default CountCalories;
