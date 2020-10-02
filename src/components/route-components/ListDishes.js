import React, { Component } from "react";
import Menu from "../subcomponents/Menu";
import MealsInList from "../subcomponents/ListDishesComponents/MealsInList";
import MainStructureDish from "../subcomponents/MainStructureDish";
import SearchDishes from "../subcomponents/ListDishesComponents/SearchDishes";
import SortDishes from "../subcomponents/ListDishesComponents/SortDishes";
import ImagesList from "../subcomponents/ImagesList";
import { Redirect, NavLink } from "react-router-dom";

class ListDishes extends Component {
  state = {
    currentShowListDishes: [],
    filterShowListDishes: [],
    sortShowListDishes: [],

    statusOpenListDishesInMeal: false,
    statusOpenAddDishToList: false,

    valueSearchListDishes: "",
    valueSortCategory: "default",
  };

  // sort list dishes

  componentDidUpdate(prevProps, prevState) {
    if (prevState.valueSortCategory !== this.state.valueSortCategory) {
      const valueSortDishes = this.state.valueSortCategory;
      let sortShowListDishes = [...this.state.sortShowListDishes];
      const currentShowListDishes = [...this.state.currentShowListDishes];

      let sortBy;

      if (valueSortDishes === "default") {
        sortShowListDishes = [];
      } else {
        if (valueSortDishes === "Title A-Z") {
          sortBy = (a, b) => {
            if (a.nameDish < b.nameDish) {
              return -1;
            }
            if (a.nameDish > b.nameDish) {
              return 1;
            }
            return 0;
          };
        } else if (valueSortDishes === "Title Z-A") {
          sortBy = (a, b) => {
            if (a.nameDish < b.nameDish) {
              return 1;
            }
            if (a.nameDish > b.nameDish) {
              return -1;
            }
            return 0;
          };
        }

        sortShowListDishes = currentShowListDishes.sort(sortBy);
      }

      this.setState({
        sortShowListDishes,
      });
    }
  }

  // change in sort/search value

  handleChangeSortSearchValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  // status open page for add dish

  handleStatusOpenAddDishToList = () => {
    this.setState({
      statusOpenAddDishToList: true,
    });
  };

  // arr current list dishes according to choose meal

  handleShowListDishesInMeal = (e) => {
    const listDishes = [...this.props.listDishes];
    const chooseCategoryMeal = e.target.innerHTML;

    let currentShowListDishes = [...this.state.currentShowListDishes];

    this.props.mealsSet.forEach((categoryMeal) => {
      if (chooseCategoryMeal === categoryMeal) {
        currentShowListDishes = listDishes.filter((dish) => {
          return dish.categoryDish === categoryMeal;
        });
      }

      this.setState({
        currentShowListDishes,
        statusOpenListDishesInMeal: true,
      });
    });
  };

  // delete dishes of current list

  handleDeleteDishOfCurrentShowList = (e) => {
    const currentShowListDishes = [...this.state.currentShowListDishes];

    const idDish = e.target.parentNode.parentNode.id;

    const idDishToDelete = currentShowListDishes.findIndex((dish) => {
      return idDish === dish.id;
    });

    currentShowListDishes.splice(idDishToDelete, 1);

    this.setState({
      currentShowListDishes,
    });
  };

  // search in list dishes

  handleSearchDishesInList = (e) => {
    e.preventDefault();

    const searchValue = e.target.value;

    let filterShowListDishes = [...this.state.filterShowListDishes];

    filterShowListDishes = this.state.currentShowListDishes.filter((meal) => {
      return meal.nameDish === searchValue;
    });

    this.setState({
      filterShowListDishes,
    });
  };

  render() {
    const {
      handleDeleteDishOfList,
      mealsSet,
      handleOpenEditDish,
      shoppingListLength,
    } = this.props;

    const {
      currentShowListDishes,
      filterShowListDishes,
      sortShowListDishes,
      statusOpenListDishesInMeal,
      statusOpenAddDishToList,
      valueSearchListDishes,
      valueSortCategory,
    } = this.state;

    if (statusOpenAddDishToList) {
      return <Redirect to="/add-dish" />;
    }

    let optionShowAddListDishes;

    if (
      filterShowListDishes.length !== 0 ||
      (filterShowListDishes.length === 0 && valueSearchListDishes.length !== 0)
    ) {
      optionShowAddListDishes = filterShowListDishes;
    } else if (sortShowListDishes.length !== 0) {
      optionShowAddListDishes = sortShowListDishes;
    } else {
      optionShowAddListDishes = currentShowListDishes;
    }

    const dishes = optionShowAddListDishes.map((dish, id) => {
      return (
        <div className="dish dish--list-dishes" key={id} id={dish.id}>
          <div className="dish__box-edit-delete">
            <NavLink
              to="/edit-dish"
              className="dish__edit link"
              onClick={handleOpenEditDish}
            >
              edit
            </NavLink>
            <button
              className="dish__delete"
              onClick={(e) => {
                handleDeleteDishOfList(e);
                this.handleDeleteDishOfCurrentShowList(e);
              }}
            >
              X
            </button>
          </div>

          <p className="dish__category">
            category:{" "}
            <span className="dish__category--name">{dish.categoryDish}</span>
          </p>

          <MainStructureDish dish={dish} />
        </div>
      );
    });

    return (
      <>
        <Menu shoppingListLength={shoppingListLength} />
        <section className="section-list-dishes">
          <ImagesList name="list-dishes" />

          <button
            className="section-list-dishes__add-dish"
            onClick={this.handleStatusOpenAddDishToList}
          >
            add new dish
          </button>

          {mealsSet ? (
            <MealsInList
              mealsSet={mealsSet}
              handleShowListDishesInMeal={this.handleShowListDishesInMeal}
            />
          ) : null}

          {currentShowListDishes.length !== 0 && (
            <>
              <div className="box-search-sort">
                <SearchDishes
                  valueSearchListDishes={valueSearchListDishes}
                  handleChangeSortSearchValue={this.handleChangeSortSearchValue}
                  handleSearchDishesInList={this.handleSearchDishesInList}
                />

                <SortDishes
                  valueSortCategory={valueSortCategory}
                  handleChangeSortSearchValue={this.handleChangeSortSearchValue}
                />
              </div>

              <section className="dishes">{dishes}</section>
            </>
          )}

          {currentShowListDishes.length === 0 && statusOpenListDishesInMeal ? (
            <p className="info">Unfortunately your list dishes is empty</p>
          ) : null}
        </section>
      </>
    );
  }
}

export default ListDishes;
