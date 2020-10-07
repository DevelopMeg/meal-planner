import React from "react";
import SearchSetDish from "../subcomponents/SetDishForDayComponents/SearchSetDish";
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
        <SearchSetDish
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
    <section className="section-set-dish">
      <button
        className="btn-come-back"
        onClick={() => {
          props.handleClearSetSettings();
          handleComeBack();
        }}
      >
        come back
      </button>

      <div className="section-set-dish__image"></div>

      <h3 className="section-set-dish__title">
        add dish to {props.chooseMealToSet}
      </h3>

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
    </section>
  );
};

export default SetDishForDay;
