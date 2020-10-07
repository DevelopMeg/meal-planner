import React from "react";
import { useHistory } from "react-router-dom";
import MainStructureDish from "../MainStructureDish";

const SearchSetDish = (props) => {
  const history = useHistory();

  const handleComeBack = () => {
    history.push(`/set-dishes-for-day/${props.chooseDayToSetDishes}`);
  };

  let addedDish;

  if (props.arrSearchDishesToSetDish.length !== 0) {
    props.arrSearchDishesToSetDish.forEach((setDish) => {
      if (typeof setDish.setForDay === "string") {
        if (
          setDish.id === props.dish.id &&
          setDish.setForDay === props.chooseDayToSetDishes
        ) {
          addedDish = props.dish.addedDish;
        }
      } else {
        setDish.setForDay.forEach((day) => {
          if (
            setDish.id === props.dish.id &&
            day === props.chooseDayToSetDishes
          ) {
            addedDish = props.dish.addedDish;
          }
        });
      }
    });
  }

  return (
    <div className="dish dish--set-dish" key={props.dish.id} id={props.dish.id}>
      <p className="dish__category">Category: {props.dish.categoryDish}</p>

      <MainStructureDish dish={props.dish} />

      <button
        className="dish__add-dish"
        onClick={() => {
          props.handleClearSetSettings();
          props.handleAddDishToMealForDay(props.dish.id);
          handleComeBack();
        }}
        disabled={addedDish ? true : false}
      >
        add
      </button>
    </div>
  );
};

export default SearchSetDish;
