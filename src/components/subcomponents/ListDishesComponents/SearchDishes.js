import React from "react";

const SearchDishes = (props) => {
  return (
    <>
      <form>
        <label htmlFor="searchDishes">search by name dish</label>
        <input
          id="searchDishes"
          type="text"
          name="valueSearchListDishes"
          value={props.valueSearchListDishes}
          onChange={(e) => {
            props.handleChangeSortSearchValue(e);
            props.handleSearchDishesInList(e);
          }}
        />
      </form>
    </>
  );
};

export default SearchDishes;
