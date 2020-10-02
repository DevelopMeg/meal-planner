import React from "react";

const SearchDishes = (props) => {
  return (
    <>
      <form className="search-dishes">
        <label className="search-dishes__label" htmlFor="searchDishes">
          search by name dish
        </label>

        <input
          id="searchDishes"
          className="search-dishes__input"
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
