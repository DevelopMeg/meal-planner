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
    <section className="section-set-dishes">
      <button
        className="btn-come-back"
        onClick={() => {
          props.handleClearStatusSetDishes();
          handleComeBack();
        }}
      >
        come back
      </button>

      <div className="section-set-dishes__image"></div>

      {props.mealsSet ? (
        <MealsOfWeek
          mealsSet={props.mealsSet}
          handleChooseMealToSet={props.handleChooseMealToSet}
          handleShowDishes={props.handleShowDishes}
          chooseDayToSetDishes={props.chooseDayToSetDishes}
        />
      ) : null}

      {props.chooseMealToSet ? (
        <section className="already-set-dishes">
          <button
            className="already-set-dishes__add-dish"
            onClick={handleOpenSetDish}
          >
            set dishes for {props.chooseMealToSet}
          </button>
          <AlreadySetDishes
            setDishesInMealOfDay={props.setDishesInMealOfDay}
            chooseMealToSet={props.chooseMealToSet}
            chooseDayToSetDishes={props.chooseDayToSetDishes}
            handleDeleteDishOfSetList={props.handleDeleteDishOfSetList}
          />
        </section>
      ) : null}
    </section>
  );
};

export default SetDishesForDay;
