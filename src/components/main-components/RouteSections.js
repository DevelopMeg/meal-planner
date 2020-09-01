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

    infoProduct: {
      id: "",
      name: "",
      count: "",
    },
    shoppingList: [],
    statusOpenEditProduct: false,
    idEditProduct: "",

    chooseDayToSetDishes: "",
    chooseMealToSet: "",
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

  // edit dish

  handleOpenEditDish = (e) => {
    debugger;
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

  handleEditDish = (e) => {
    e.preventDefault();
    const listDishes = [...this.state.listDishes];

    listDishes[this.state.idEditDish] = this.state.infoDish;

    this.setState({
      listDishes,
    });
  };

  // shopping list

  handleChangeInfoProduct = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState((prevState) => ({
      infoProduct: {
        ...prevState.infoProduct,
        [name]: value,
      },
    }));
  };

  handleAddProductToShoppingList = (nameProduct, countProduct, e) => {
    e.preventDefault();
    const shoppingList = [...this.state.shoppingList];
    const generateId = Math.random().toString(36).substr(2, 9);

    const product = { name: nameProduct, count: countProduct, id: generateId };

    shoppingList.push(product);

    this.setState({
      infoProduct: {
        name: "",
        count: "",
      },
      shoppingList,
    });
  };

  handleOpenEditProductList = (e) => {
    const shoppingList = [...this.state.shoppingList];

    const productId = e.target.parentNode.parentNode.id;

    const idEditProduct = shoppingList.findIndex((product) => {
      return productId === product.id;
    });

    const editProduct = shoppingList[idEditProduct];

    this.setState({
      infoProduct: {
        id: editProduct.id,
        name: editProduct.name,
        count: editProduct.count,
      },
      idEditProduct,
      statusOpenEditProduct: true,
    });
  };

  handleDeleteProductList = (e) => {
    const shoppingList = [...this.state.shoppingList];

    const parentId = e.target.parentNode.parentNode.id;

    const idDeleteItem = shoppingList.findIndex((item) => {
      return item.id === parentId;
    });

    shoppingList.splice(idDeleteItem, 1);

    this.setState({
      shoppingList,
    });
  };

  handleEditProductList = (e) => {
    e.preventDefault();
    const shoppingList = [...this.state.shoppingList];

    shoppingList[this.state.idEditProduct] = this.state.infoProduct;

    this.setState({
      infoProduct: {
        id: "",
        name: "",
        count: "",
      },
      shoppingList,
      statusOpenEditProduct: false,
    });
  };

  // plan meals

  handleOpenPlanForDay = (e) => {
    this.setState({
      chooseDayToSetDishes: e.target.innerHTML,
    });
  };

  // set dishes

  handleChooseMealToSet = (e) => {
    this.setState({
      chooseMealToSet: e.target.innerHTML,
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

  handleClearStatusSetDishes = () => {
    this.setState({
      chooseDayToSetDishes: "",
      chooseMealToSet: "",
    });
  };

  render() {
    const {
      statusSetStructureSettings,
      mealsSet,
      daysSet,
      infoDish,
      listDishes,
      infoProduct,
      shoppingList,
      statusOpenEditProduct,
      idEditProduct,
      chooseDayToSetDishes,
      chooseMealToSet,
    } = this.state;

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
                  shoppingListLength={shoppingList.length}
                />
              );
            }}
          />

          <Route
            path="/"
            exact
            render={() => {
              return statusSetStructureSettings ? (
                <HomePage shoppingListLength={shoppingList.length} />
              ) : (
                <Redirect to="/structure-settings" />
              );
            }}
          />

          <Route
            path="/plan-meals"
            render={() => {
              return (
                <PlanMeals
                  daysSet={daysSet}
                  handleOpenPlanForDay={this.handleOpenPlanForDay}
                  chooseDayToSetDishes={chooseDayToSetDishes}
                  shoppingList={shoppingList}
                />
              );
            }}
          />

          <Route
            path="/set-dishes-for-day"
            render={() => {
              return (
                <SetDishesForDay
                  mealsSet={mealsSet}
                  chooseDayToSetDishes={chooseDayToSetDishes}
                  handleChooseMealToSet={this.handleChooseMealToSet}
                  chooseMealToSet={chooseMealToSet}
                  handleClearStatusSetDishes={this.handleClearStatusSetDishes}
                />
              );
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
              return (
                <ShoppingList
                  infoProduct={infoProduct}
                  shoppingList={shoppingList}
                  handleAddProductToShoppingList={
                    this.handleAddProductToShoppingList
                  }
                  handleChangeInfoProduct={this.handleChangeInfoProduct}
                  statusOpenEditProduct={statusOpenEditProduct}
                  idEditProduct={idEditProduct}
                  handleEditProductList={this.handleEditProductList}
                  handleOpenEditProductList={this.handleOpenEditProductList}
                  handleDeleteProductList={this.handleDeleteProductList}
                />
              );
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
                  handleOpenEditDish={this.handleOpenEditDish}
                  shoppingListLength={shoppingList.length}
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
                />
              );
            }}
          />

          <Route
            path="/edit-dish"
            render={() => {
              return (
                <EditDish
                  infoDish={infoDish}
                  mealsSet={mealsSet}
                  handleEditDish={this.handleEditDish}
                  handleClearValues={this.handleClearValues}
                  handleChangeChooseCategory={this.handleChangeChooseCategory}
                  handleChangeValueInfoDish={this.handleChangeValueInfoDish}
                  handleAddIngredients={this.handleAddIngredients}
                  handleDeleteIngredients={this.handleDeleteIngredients}
                />
              );
            }}
          />

          <Route component={NoPage} />
        </Switch>
      </main>
    );
  }
}

export default RouteSections;
