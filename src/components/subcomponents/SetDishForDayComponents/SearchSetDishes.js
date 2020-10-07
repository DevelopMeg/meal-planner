import React from "react";

const SearchSetDishes = (props) => {
  return (
    <>
      <div className="section-set-dish__box-btn-search">
        <button
          className="section-set-dish__btn-search"
          name="searchNameDish"
          onClick={props.handleChooseOptionSetDish}
        >
          search dish by name in category
        </button>

        <button
          className="section-set-dish__btn-search"
          name="chooseDish"
          onClick={(e) => {
            props.handleChooseOptionSetDish(e);
            props.handleSearchDish(e);
          }}
        >
          show all dishes in category
        </button>
      </div>

      {props.chooseOptionSetDish === "searchNameDish" ? (
        <section className="section-search-dish">
          <form
            className="section-search-dish__form"
            name="searchNameDish"
            onSubmit={props.handleSearchDish}
          >
            <label
              className="section-search-dish__label"
              htmlFor="searchSetDishes"
            >
              search by name dish
            </label>
            <input
              id="searchSetDishes"
              type="text"
              name="valueSearchSetDishes"
              className="section-search-dish__input"
              value={props.valueSearchSetDishes}
              onChange={props.handleChangeValue}
            />
            <button
              className="section-search-dish__btn-search"
              name="searchNameDish"
            >
              search
            </button>
          </form>

          {props.arrSearchDishesToSetDish.length !== 0 ? (
            <section className="section-search-dish__dishes">
              {props.dishesToSetDish}
            </section>
          ) : null}

          {props.chooseOptionSetDish === "searchNameDish" &&
          props.arrSearchDishesToSetDish.length === 0 &&
          props.statusSearchDishesByName ? (
            <p className="info">
              Unfortunately there is no such name for the dish
            </p>
          ) : null}
        </section>
      ) : null}

      {props.chooseOptionSetDish === "chooseDish" &&
      props.arrSearchDishesToSetDish.length !== 0 ? (
        <section className="section-set-dish__all-dishes">
          {props.dishesToSetDish}
        </section>
      ) : null}

      {props.chooseOptionSetDish === "chooseDish" &&
      props.arrSearchDishesToSetDish.length === 0 &&
      props.statusSearchDishesByCategory ? (
        <p className="info">Unfortunately this category is empty</p>
      ) : null}
    </>
  );
};

export default SearchSetDishes;
