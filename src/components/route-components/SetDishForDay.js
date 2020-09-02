import React from "react";
import SearchSetDishes from "../subcomponents/SetDishForDayComponents/SearchSetDishes";
import { useHistory } from "react-router-dom";

const SetDishForDay = (props) => {
  const history = useHistory();

  const handleComeBack = () => {
    history.push(`/set-dishes-for-day/${props.chooseDayToSetDishes}`);
  };

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
      />
    </>
  );
};

export default SetDishForDay;
