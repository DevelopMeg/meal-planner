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
    chooseOptionSetDish: "",
    valueSearchSetDishes: "",

    arrSearchDishesToSetDish: [],
    statusSearchDishesByCategory: false,
    statusSearchDishesByName: false,

    setDishes: [],
    setDishesInMealOfDay: [],
  };

  // structure settings

  handleSaveStructureSetting = (days, meals) => {
    this.setState({
      daysSet: days,
      mealsSet: meals,
      statusSetStructureSettings: true,
    });
  };

  // general change value

  handleChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
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

    const dishId = e.target.parentNode.id;

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

  handleAddIngredientToShoppingList = (
    nameDish,
    ingredientName,
    idIngredient
  ) => {
    const shoppingList = [...this.state.shoppingList];

    const ingredient = {
      name: `${ingredientName} for ${nameDish}`,
      id: idIngredient,
      count: 1,
      added: true,
    };

    shoppingList.push(ingredient);

    this.setState({
      shoppingList,
    });
  };

  // set dishes

  handleChooseMealToSet = (e) => {
    this.setState({
      chooseMealToSet: e.target.innerHTML,
    });
  };

  handleChooseOptionSetDish = (e) => {
    const name = e.target.name;

    if (name === "searchNameDish") {
      this.setState({
        arrSearchDishesToSetDish: [],
        statusSearchDishesByCategory: false,
      });
    }

    this.setState({
      chooseOptionSetDish: name,
    });
  };

  handleSearchDish = (e) => {
    e.preventDefault();

    const { listDishes, valueSearchSetDishes, chooseMealToSet } = this.state;

    let arrSearchDishesToSetDish = [...this.state.arrSearchDishesToSetDish];

    if (e.target.name === "searchNameDish") {
      arrSearchDishesToSetDish = listDishes.filter((dish) => {
        return (
          dish.categoryDish === chooseMealToSet &&
          dish.nameDish.includes(valueSearchSetDishes)
        );
      });

      this.setState({
        statusSearchDishesByName: true,
      });
    }

    if (e.target.name === "chooseDish") {
      arrSearchDishesToSetDish = listDishes.filter((dish) => {
        return dish.categoryDish === chooseMealToSet;
      });

      this.setState({
        statusSearchDishesByName: false,
        statusSearchDishesByCategory: true,
      });
    }

    this.setState({
      arrSearchDishesToSetDish,
      valueSearchSetDishes: "",
    });
  };

  handleAddDishToMealForDay = (idAddDish) => {
    const setDishes = [...this.state.setDishes];
    const { chooseDayToSetDishes } = this.state;

    const setDish = this.state.arrSearchDishesToSetDish.filter((dish) => {
      return dish.id === idAddDish;
    });

    setDish.forEach((item) => {
      item.addedDish = true;

      if (setDishes.length === 0) {
        item.setForDay = chooseDayToSetDishes;

        setDishes.push(item);
      } else {
        setDishes.forEach((setDish) => {
          if (setDish.id !== item.id && item.setForDay === "") {
            item.setForDay = chooseDayToSetDishes;

            setDishes.push(item);
          } else if (setDish.id === item.id) {
            let arrSetForDay;

            if (typeof item.setForDay === "string") {
              arrSetForDay = item.setForDay.split(",");

              arrSetForDay.push(chooseDayToSetDishes);
              item.setForDay = arrSetForDay;
            } else {
              const presentDay = item.setForDay.findIndex((day) => {
                return day === chooseDayToSetDishes;
              });

              if (presentDay === -1) {
                arrSetForDay = item.setForDay;

                arrSetForDay.push(chooseDayToSetDishes);
                item.setForDay = arrSetForDay;
              }
            }
          }
        });
      }
    });

    this.setState({
      setDishes,
    });
  };

  handleShowDishes = (e) => {
    const setDishes = [...this.state.setDishes];
    const chooseMeal = e.target.innerHTML;
    let setDishesInMealOfDay = [...this.state.setDishesInMealOfDay];
    const { chooseDayToSetDishes } = this.state;

    if (setDishesInMealOfDay.length !== 0) {
      this.setState({
        setDishesInMealOfDay: [],
      });
    }

    this.state.mealsSet.forEach((categoryMeal) => {
      if (chooseMeal === categoryMeal) {
        const dishesSetInChooseMeals = setDishes.filter((dish) => {
          return dish.categoryDish === categoryMeal;
        });

        if (dishesSetInChooseMeals.length !== 0) {
          setDishesInMealOfDay = dishesSetInChooseMeals.filter((dish) => {
            if (typeof dish.setForDay !== "string") {
              const result = dish.setForDay.filter((day) => {
                return day === chooseDayToSetDishes;
              });

              return result.length !== 0;
            } else {
              return dish.setForDay === chooseDayToSetDishes;
            }
          });
        } else {
          setDishesInMealOfDay = [];
        }
      }
    });

    this.setState({
      setDishesInMealOfDay,
    });
  };

  handleDeleteDishOfSetList = (e) => {
    const setDishesInMealOfDay = [...this.state.setDishesInMealOfDay];
    const setDishes = [...this.state.setDishes];
    const idDish = e.target.parentNode.id;

    const idDayDish = setDishes.findIndex((dish) => {
      return idDish === dish.id;
    });

    if (idDayDish !== -1) {
      const dayDish = setDishes[idDayDish].setForDay;

      if (typeof dayDish !== "string") {
        if (dayDish.length !== 1) {
          const idDayInArrToDelete = dayDish.findIndex((day) => {
            return day === this.state.chooseDayToSetDishes;
          });

          dayDish.splice(idDayInArrToDelete, 1);
        } else {
          setDishes.splice(idDayDish, 1);
        }
      } else {
        setDishes.splice(idDayDish, 1);
      }
    }

    const idDishToDeleteCurrentSetDishes = setDishesInMealOfDay.findIndex(
      (dish) => {
        return idDish === dish.id;
      }
    );

    setDishesInMealOfDay.splice(idDishToDeleteCurrentSetDishes, 1);

    this.setState({
      setDishes,
      setDishesInMealOfDay,
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

  handleClearSetSettings = () => {
    this.setState({
      chooseOptionSetDish: "",
      arrSearchDishesToSetDish: [],
      statusSearchDishesByCategory: false,
      statusSearchDishesByName: false,
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
      chooseOptionSetDish,
      valueSearchSetDishes,
      arrSearchDishesToSetDish,
      statusSearchDishesByCategory,
      statusSearchDishesByName,
      setDishes,
      setDishesInMealOfDay,
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
                  mealsSet={mealsSet}
                  setDishes={setDishes}
                  handleOpenPlanForDay={this.handleOpenPlanForDay}
                  chooseDayToSetDishes={chooseDayToSetDishes}
                  shoppingList={shoppingList}
                  handleAddIngredientToShoppingList={
                    this.handleAddIngredientToShoppingList
                  }
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
                  handleShowDishes={this.handleShowDishes}
                  setDishesInMealOfDay={setDishesInMealOfDay}
                  handleDeleteDishOfSetList={this.handleDeleteDishOfSetList}
                />
              );
            }}
          />

          <Route
            path="/set-dish-for-day"
            render={() => {
              return (
                <SetDishForDay
                  chooseDayToSetDishes={chooseDayToSetDishes}
                  handleClearSetSettings={this.handleClearSetSettings}
                  chooseMealToSet={chooseMealToSet}
                  chooseOptionSetDish={chooseOptionSetDish}
                  handleChooseOptionSetDish={this.handleChooseOptionSetDish}
                  handleSearchDish={this.handleSearchDish}
                  valueSearchSetDishes={valueSearchSetDishes}
                  handleChangeValue={this.handleChangeValue}
                  arrSearchDishesToSetDish={arrSearchDishesToSetDish}
                  statusSearchDishesByCategory={statusSearchDishesByCategory}
                  statusSearchDishesByName={statusSearchDishesByName}
                  handleAddDishToMealForDay={this.handleAddDishToMealForDay}
                />
              );
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
