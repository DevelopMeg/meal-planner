import React from "react";

const SortDishes = (props) => {
  return (
    <section className="sort-dishes">
      <label className="sort-dishes__label">sort dishes</label>

      <select
        name="valueSortCategory"
        className="sort-dishes__categories"
        value={props.valueSortCategory}
        onChange={props.handleChangeSortSearchValue}
      >
        <option className="sort-dishes__category" value="default">
          default
        </option>
        <option className="sort-dishes__category" value="Title A-Z">
          Title A-Z
        </option>
        <option className="sort-dishes__category" value="Title Z-A">
          Title Z-A
        </option>
      </select>
    </section>
  );
};

export default SortDishes;
