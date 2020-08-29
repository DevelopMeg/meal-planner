import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import StructureSettings from "../route-components/StructureSettings";
import HomePage from "../route-components/HomePage";
import PlanMeals from "../route-components/PlanMeals";
import SetDishesForDay from "../route-components/SetDishesForDay";
import SetDishForDay from "../route-components/SetDishForDay";
import ShoppingList from "../route-components/ShoppingList";
import ListDishes from "../route-components/ListDishes";
import AddDish from "../route-components/AddDish";
import EditDish from "../route-components/EditDish";
import NoPage from "../route-components/NoPage";

class RouteSections extends Component {
  state = {
    daysSet: "",
    mealsSet: "",
    statusSetStructureSettings: false,
    infoDish: {
      id: "",
      categoryDish: "",
      nameDish: "",
      ingredient: "",
      ingredients: [],
      kcal: "",
      setForDay: "",
    },
    listDishes: [],
  };

  // structure settings

  handleSaveStructureSetting = (days, meals) => {
    this.setState({
      daysSet: days,
      mealsSet: meals,
      statusSetStructureSettings: true,
    });
  };

  // add dish to list dishes

  handleChangeChooseCategory = (e) => {
    const valueCategoryDish = e.target.value;

    this.setState((prevState) => ({
      infoDish: {
        ...prevState.infoDish,
        categoryDish: valueCategoryDish,
      },
    }));
  };

  handleChangeValueInfoDish = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState((prevState) => ({
      infoDish: {
        ...prevState.infoDish,
        [name]: value,
      },
    }));
  };

  handleAddIngredients = (e) => {
    e.preventDefault();
    const ingredientName = this.state.infoDish.ingredient;
    const ingredients = [...this.state.infoDish.ingredients];

    const generateId = Math.random().toString(36).substr(2, 9);

    const ingredient = { name: ingredientName, id: generateId, added: false };

    ingredients.push(ingredient);

    this.setState((prevState) => ({
      infoDish: {
        ...prevState.infoDish,
        ingredient: "",
        ingredients,
      },
    }));
  };

  handleDeleteIngredients = (e) => {
    e.preventDefault();
    const parent = e.target.parentNode.id;

    const ingredients = [...this.state.infoDish.ingredients];

    ingredients.splice(parent, 1);

    this.setState((prevState) => ({
      infoDish: {
        ...prevState.infoDish,
        ingredients,
      },
    }));
  };

  handleAddDishToList = (e) => {
    e.preventDefault();
    const listDishes = [...this.state.listDishes];

    const generateId = Math.random().toString(36).substr(2, 9);

    const { categoryDish, nameDish, ingredients, kcal } = this.state.infoDish;

    listDishes.push({
      id: generateId,
      addedDish: false,
      categoryDish: categoryDish,
      nameDish: nameDish,
      ingredients: ingredients,
      kcal: kcal,
      setForDay: "",
    });

    this.setState({
      infoDish: {
        id: "",
        categoryDish: "",
        nameDish: "",
        ingredient: "",
        ingredients: [],
        kcal: "",
        setForDay: "",
      },
      listDishes,
    });
  };

  // list dishes

  handleDeleteDishOfList = (e) => {
    const listDishes = [...this.state.listDishes];

    const idDish = e.target.parentNode.parentNode.id;

    const idDishToDelete = listDishes.findIndex((dish) => {
      return idDish === dish.id;
    });

    listDishes.splice(idDishToDelete, 1);

    this.setState({
      listDishes,
    });
  };

  handleOpenEditDish = (e) => {
    const listDishes = [...this.state.listDishes];

    const dishId = e.target.parentNode.parentNode.id;

    const idEditDish = listDishes.findIndex((dish) => {
      return dishId === dish.id;
    });

    const editDish = listDishes[idEditDish];

    this.setState({
      infoDish: {
        addedDish: false,
        id: editDish.id,
        categoryDish: editDish.categoryDish,
        nameDish: editDish.nameDish,
        ingredient: "",
        ingredients: editDish.ingredients,
        kcal: editDish.kcal,
        setForDay: "",
      },
      idEditDish: idEditDish,
    });
  };

  // clear

  handleClearValues = () => {
    this.setState({
      infoDish: {
        categoryDish: "",
        nameDish: "",
        ingredient: "",
        ingredients: [],
        kcal: "",
      },
    });
  };

  render() {
    const { statusSetStructureSettings, infoDish, mealsSet } = this.state;

    return (
      <main>
        <Switch>
          <Route
            path="/structure-settings"
            render={() => {
              return (
                <StructureSettings
                  handleSaveStructureSetting={this.handleSaveStructureSetting}
                  statusSetStructureSettings={statusSetStructureSettings}
                />
              );
            }}
          />

          <Route
            path="/"
            exact
            render={() => {
              return statusSetStructureSettings ? (
                <HomePage />
              ) : (
                <Redirect to="/structure-settings" />
              );
            }}
          />

          <Route
            path="/plan-meals"
            render={() => {
              return <PlanMeals />;
            }}
          />

          <Route
            path="/set-dishes-for-day"
            render={() => {
              return <SetDishesForDay />;
            }}
          />

          <Route
            path="/set-dish-for-day"
            render={() => {
              return <SetDishForDay />;
            }}
          />

          <Route
            path="/shopping-list"
            render={() => {
              return <ShoppingList />;
            }}
          />

          <Route
            path="/list-dishes"
            render={() => {
              return (
                <ListDishes
                  mealsSet={mealsSet}
                  listDishes={listDishes}
                  handleDeleteDishOfList={this.handleDeleteDishOfList}
                />
              );
            }}
          />

          <Route
            path="/add-dish"
            render={() => {
              return (
                <AddDish
                  infoDish={infoDish}
                  mealsSet={mealsSet}
                  handleChangeChooseCategory={this.handleChangeChooseCategory}
                  handleChangeValueInfoDish={this.handleChangeValueInfoDish}
                  handleAddIngredients={this.handleAddIngredients}
                  handleDeleteIngredients={this.handleDeleteIngredients}
                  handleClearValues={this.handleClearValues}
                  handleAddDishToList={this.handleAddDishToList}
                  handleOpenEditDish={this.handleOpenEditDish}
                />
              );
            }}
          />

          <Route
            path="/edit-dish"
            render={() => {
              return <EditDish />;
            }}
          />

          <Route component={NoPage} />
        </Switch>
      </main>
    );
  }
}

export default RouteSections;
