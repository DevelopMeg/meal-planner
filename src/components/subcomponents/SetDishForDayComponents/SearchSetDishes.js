import React from "react";

const SearchSetDishes = (props) => {
  return (
    <>
      <button name="searchNameDish" onClick={props.handleChooseOptionSetDish}>
        search dish by name in category
      </button>

      <button
        name="chooseDish"
        onClick={(e) => {
          props.handleChooseOptionSetDish(e);
          props.handleSearchDish(e);
        }}
      >
        show all dishes in category
      </button>

      {props.chooseOptionSetDish === "searchNameDish" ? (
        <section>
          <form name="searchNameDish" onSubmit={props.handleSearchDish}>
            <label htmlFor="searchSetDishes">search by name dish</label>
            <input
              id="searchSetDishes"
              type="text"
              name="valueSearchSetDishes"
              value={props.valueSearchSetDishes}
              onChange={props.handleChangeValue}
            />
            <button name="searchNameDish">search</button>
          </form>

          {props.chooseOptionSetDish === "searchNameDish" &&
          props.arrSearchDishesToSetDish.length === 0 &&
          props.statusSearchDishesByName ? (
            <p>Unfortunately there is no such name for the dish</p>
          ) : null}
        </section>
      ) : null}

      {props.chooseOptionSetDish === "chooseDish" &&
      props.arrSearchDishesToSetDish.length === 0 &&
      props.statusSearchDishesByCategory ? (
        <p>Unfortunately this category is empty</p>
      ) : null}
    </>
  );
};

export default SearchSetDishes;
