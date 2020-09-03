import React from "react";
import { useHistory } from "react-router-dom";
import MealsOfWeek from "../subcomponents/SetDishesForDayComponents/MealsOfWeek";
import AlreadySetDishes from "../subcomponents/SetDishesForDayComponents/AlreadySetDishes";

const SetDishesForDay = (props) => {
  const history = useHistory();

  const handleComeBack = () => {
    history.push("/plan-meals");
  };

  const handleOpenSetDish = () => {
    history.push(`/set-dish-for-day/${props.chooseMealToSet}`);
  };

  return (
    <>
      <button
        onClick={() => {
          props.handleClearStatusSetDishes();
          handleComeBack();
        }}
      >
        come back
      </button>
      {props.mealsSet ? (
        <MealsOfWeek
          mealsSet={props.mealsSet}
          handleChooseMealToSet={props.handleChooseMealToSet}
          handleShowDishes={props.handleShowDishes}
          chooseDayToSetDishes={props.chooseDayToSetDishes}
        />
      ) : null}
      {props.chooseMealToSet ? (
        <button onClick={handleOpenSetDish}>
          set dishes for {props.chooseMealToSet}
        </button>
      ) : null}
      {props.chooseMealToSet ? (
        <AlreadySetDishes
          setDishesInMealOfDay={props.setDishesInMealOfDay}
          chooseMealToSet={props.chooseMealToSet}
          chooseDayToSetDishes={props.chooseDayToSetDishes}
          handleDeleteDishOfSetList={props.handleDeleteDishOfSetList}
        />
      ) : null}
    </>
  );
};

export default SetDishesForDay;
