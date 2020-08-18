import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
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
  state = {};

  render() {
    return (
      <main>
        <Switch>
          <Route
            path="/structure-settings"
            render={() => {
              return <StructureSettings />;
            }}
          />

          <Route
            path="/"
            render={() => {
              return <HomePage />;
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
              return <ListDishes />;
            }}
          />

          <Route
            path="/add-dish"
            render={() => {
              return <AddDish />;
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
