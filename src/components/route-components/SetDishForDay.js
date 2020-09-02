import React from "react";
import ListSearchDishes from "../subcomponents/SetDishForDayComponents/ListSearchDishes";
import SearchSetDishes from "../subcomponents/SetDishForDayComponents/SearchSetDishes";
import { useHistory } from "react-router-dom";

const SetDishForDay = (props) => {
  const history = useHistory();

  const handleComeBack = () => {
    history.push(`/set-dishes-for-day/${props.chooseDayToSetDishes}`);
  };

  let dishesToSetDish;

  if (props.arrSearchDishesToSetDish.length !== 0) {
    dishesToSetDish = props.arrSearchDishesToSetDish.map((dish, id) => {
      return (
        <ListSearchDishes
          key={id}
          dish={dish}
          handleClearSetSettings={props.handleClearSetSettings}
          handleAddDishToMealForDay={props.handleAddDishToMealForDay}
          chooseDayToSetDishes={props.chooseDayToSetDishes}
          arrSearchDishesToSetDish={props.arrSearchDishesToSetDish}
        />
      );
    });
  }

  return (
    <>
      <button
        onClick={() => {
          props.handleClearSetSettings();
          handleComeBack();
        }}
      >
        come back
      </button>

      <h3>add dish to {props.chooseMealToSet}</h3>
      <SearchSetDishes
        handleChooseOptionSetDish={props.handleChooseOptionSetDish}
        handleSearchDish={props.handleSearchDish}
        statusSearchDishesByName={props.statusSearchDishesByName}
        statusSearchDishesByCategory={props.statusSearchDishesByCategory}
        valueSearchSetDishes={props.valueSearchSetDishes}
        handleChangeValue={props.handleChangeValue}
        chooseOptionSetDish={props.chooseOptionSetDish}
        arrSearchDishesToSetDish={props.arrSearchDishesToSetDish}
        dishesToSetDish={dishesToSetDish}
      />
    </>
  );
};

export default SetDishForDay;
