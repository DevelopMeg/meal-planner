import React from "react";
import MainStructureDish from "../MainStructureDish";

const AlreadySetDishes = (props) => {
  const listSetDishes = props.setDishesInMealOfDay.map((dish, id) => {
    return (
      <li key={id} id={dish.id}>
        <MainStructureDish dish={dish} />
        <button onClick={props.handleDeleteDishOfSetList}>X</button>
      </li>
    );
  });

  return (
    <>
      <h3>dishes for {props.chooseMealToSet}</h3>
      {listSetDishes.length !== 0 ? (
        <ol>{listSetDishes}</ol>
      ) : (
        <h4>{`Unfortunately your list ${props.chooseMealToSet} for ${props.chooseDayToSetDishes} is empty `}</h4>
      )}
    </>
  );
};

export default AlreadySetDishes;
