import React from "react";
import Menu from "../subcomponents/Menu";
import DaysOfWeek from "../subcomponents/PlanMealsComponents/DaysOfWeek";
import MealsForDay from "../subcomponents/PlanMealsComponents/MealsForDay";
import { useHistory } from "react-router-dom";
import ImagesList from "../subcomponents/ImagesList";

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

      <section className="section-plan-meals">
        <ImagesList name="plan-meals" />

        <div className="info-plan-meals">
          <h4 className="info-plan-meals__current-day">Today: {currentDay}</h4>
          <button
            className="info-plan-meals__clear-btn"
            onClick={props.handleClearSetPlanMeals}
          >
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
          <section className="meals-for-day">
            <button
              className="meals-for-day__add-dish"
              onClick={handleOpenSetDish}
            >
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
      </section>
    </>
  );
};

export default PlanMeals;
