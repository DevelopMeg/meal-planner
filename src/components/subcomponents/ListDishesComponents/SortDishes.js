import React from "react";

const SortDishes = (props) => {
  return (
    <section>
      <label>sort dishes</label>
      <select
        name="valueSortCategory"
        value={props.valueSortCategory}
        onChange={props.handleChangeSortSearchValue}
      >
        <option value="default">default</option>
        <option value="Title A-Z">Title A-Z</option>
        <option value="Title Z-A">Title Z-A</option>
      </select>
    </section>
  );
};

export default SortDishes;
