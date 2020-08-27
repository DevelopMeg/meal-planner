import React, { Component } from "react";
import Menu from "../subcomponents/Menu";
import MealsInList from "../subcomponents/ListDishesComponents/MealsInList";
import MainStructureDish from "../subcomponents/MainStructureDish";
import SearchDishes from "../subcomponents/ListDishesComponents/SearchDishes";
import SortDishes from "../subcomponents/ListDishesComponents/SortDishes";
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
    const { handleDeleteDishOfList, mealsSet } = this.props;

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
        <div key={id} id={dish.id}>
          <div>
            <NavLink to="/edit-dish">edit</NavLink>
            <span
              onClick={(e) => {
                handleDeleteDishOfList(e);
                this.handleDeleteDishOfCurrentShowList(e);
              }}
            >
              X
            </span>
          </div>
          <p>Category: {dish.categoryDish}</p>
          <MainStructureDish dish={dish} />
        </div>
      );
    });

    return (
      <>
        <Menu />
        <button onClick={this.handleStatusOpenAddDishToList}>
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
            <SearchDishes
              valueSearchListDishes={valueSearchListDishes}
              handleChangeSortSearchValue={this.handleChangeSortSearchValue}
              handleSearchDishesInList={this.handleSearchDishesInList}
            />

            <SortDishes
              valueSortCategory={valueSortCategory}
              handleChangeSortSearchValue={this.handleChangeSortSearchValue}
            />

            <section>{dishes}</section>
          </>
        )}

        {currentShowListDishes.length === 0 && statusOpenListDishesInMeal ? (
          <p>Unfortunately your list dishes is empty</p>
        ) : null}
      </>
    );
  }
}

export default ListDishes;
