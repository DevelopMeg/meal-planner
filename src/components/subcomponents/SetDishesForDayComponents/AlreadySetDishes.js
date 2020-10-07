import React from "react";
import MainStructureDish from "../MainStructureDish";

const AlreadySetDishes = (props) => {
  const listSetDishes = props.setDishesInMealOfDay.map((dish, id) => {
    return (
      <li key={id} id={dish.id} className="dish dish--set-dishes">
        <button
          className="dish__delete dish__delete--set-dishes"
          onClick={props.handleDeleteDishOfSetList}
        >
          X
        </button>
        <MainStructureDish dish={dish} />
      </li>
    );
  });

  return (
    <>
      <h3 className="already-set-dishes__title">
        dishes for {props.chooseMealToSet}
      </h3>
      {listSetDishes.length !== 0 ? (
        <ol className="already-set-dishes__dishes">{listSetDishes}</ol>
      ) : (
        <h4 className="info">{`Unfortunately your list ${props.chooseMealToSet} for ${props.chooseDayToSetDishes} is empty `}</h4>
      )}
    </>
  );
};

export default AlreadySetDishes;
