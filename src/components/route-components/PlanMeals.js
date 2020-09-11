import React from "react";
import Menu from "../subcomponents/Menu";
import DaysOfWeek from "../subcomponents/PlanMealsComponents/DaysOfWeek";
import MealsForDay from "../subcomponents/PlanMealsComponents/MealsForDay";
import { useHistory } from "react-router-dom";

const PlanMeals = (props) => {
  const history = useHistory();

  const handleOpenSetDish = () => {
    history.push(`/set-dishes-for-day/${props.chooseDayToSetDishes}`);
  };

  const date = new Date();
  const currentDay = date.toDateString();

  return (
    <>
      <Menu
        shoppingListLength={props.shoppingList.length}
        handleClearOpenMenuItem={props.handleClearOpenMenuItem}
      />

      <div>
        <h4>Today: {currentDay}</h4>
        <button onClick={props.handleClearSetPlanMeals}>
          clear plan meals
        </button>
      </div>

      {props.daysSet ? (
        <DaysOfWeek
          daysSet={props.daysSet}
          handleOpenPlanForDay={props.handleOpenPlanForDay}
        />
      ) : null}

      {props.chooseDayToSetDishes && (
        <section>
          <button onClick={handleOpenSetDish}>
            {`set dishes for ${props.chooseDayToSetDishes}`}
          </button>

          {props.mealsSet && (
            <MealsForDay
              mealsSet={props.mealsSet}
              setDishes={props.setDishes}
              chooseDayToSetDishes={props.chooseDayToSetDishes}
              shoppingList={props.shoppingList}
              handleAddIngredientToShoppingList={
                props.handleAddIngredientToShoppingList
              }
            />
          )}
        </section>
      )}
    </>
  );
};

export default PlanMeals;
