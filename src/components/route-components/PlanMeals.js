import React from "react";
import Menu from "../subcomponents/Menu";
import DaysOfWeek from "../subcomponents/PlanMealsComponents/DaysOfWeek";
import { useHistory } from "react-router-dom";

const PlanMeals = (props) => {
  const history = useHistory();

  const handleOpenSetDish = () => {
    history.push(`/set-dishes-for-day/${props.chooseDayToSetDishes}`);
  };

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
        <button onClick={handleOpenSetDish}>
          {`set dishes for ${props.chooseDayToSetDishes}`}
        </button>
      ) : null}

      {props.mealsSet && props.chooseDayToSetDishes ? (
        <MealsForDay
          mealsSet={props.mealsSet}
          setDishes={props.setDishes}
          chooseDayToSetDishes={props.chooseDayToSetDishes}
          shoppingList={props.shoppingList}
          handleAddIngredientToShoppingList={
            props.handleAddIngredientToShoppingList
          }
        />
      ) : null}
    </>
  );
};

export default PlanMeals;
