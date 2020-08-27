import React, { Component } from "react";
import Menu from "../subcomponents/Menu";
import MealsInList from "../subcomponents/ListDishesComponents/MealsInList";
import MainStructureDish from "../subcomponents/MainStructureDish";
import { Redirect } from "react-router-dom";

class ListDishes extends Component {
  state = {
    currentShowListDishes: [],

    statusOpenListDishesInMeal: false,
    statusOpenAddDishToList: false,
  };

  // status open page for add dish

  handleStatusOpenAddDishToList = () => {
    this.setState({
      statusOpenAddDishToList: true,
    });
  };

  // arr show list dishes according to choose meal

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

  render() {
    const { mealsSet } = this.props;

    const {
      currentShowListDishes,
      statusOpenListDishesInMeal,
      statusOpenAddDishToList,
    } = this.state;

    if (statusOpenAddDishToList) {
      return <Redirect to="/add-dish" />;
    }

    const dishes = currentShowListDishes.map((dish, id) => {
      return (
        <div key={id} id={dish.id}>
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

        {currentShowListDishes.length !== 0 && <section>{dishes}</section>}

        {currentShowListDishes.length === 0 && statusOpenListDishesInMeal ? (
          <p>Unfortunately your list dishes is empty</p>
        ) : null}
      </>
    );
  }
}

export default ListDishes;
