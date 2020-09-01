import React from "react";
import Menu from "../subcomponents/Menu";
import DaysOfWeek from "../subcomponents/PlanMealsComponents/DaysOfWeek";

const PlanMeals = (props) => {
  return (
    <>
      <Menu shoppingListLength={props.shoppingList.length} />

      {props.daysSet ? (
        <DaysOfWeek
          daysSet={props.daysSet}
          handleOpenPlanForDay={props.handleOpenPlanForDay}
        />
      ) : null}

      {props.chooseDayToSetDishes ? (
        <button>{`set dishes for ${props.chooseDayToSetDishes}`}</button>
      ) : null}
    </>
  );
};

export default PlanMeals;
