import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Menu from "../subcomponents/Menu";

class StructureSettings extends Component {
  state = {
    allDaysForPlan: { value: "all (7)", isChecked: false },
    daysForPlan: [
      { value: "monday", isChecked: false },
      { value: "tuesday", isChecked: false },
      { value: "wednesday", isChecked: false },
      { value: "thursday", isChecked: false },
      { value: "friday", isChecked: false },
      { value: "saturday", isChecked: false },
      { value: "sunday", isChecked: false },
    ],
    allMealsForPlan: { value: "all (5)", isChecked: false },
    mealsForPlan: [
      { value: "breakfast", isChecked: false },
      { value: "lunch", isChecked: false },
      { value: "dinner", isChecked: false },
      { value: "dessert", isChecked: false },
      { value: "supper", isChecked: false },
    ],
    daysSetting: [],
    mealsSetting: [],
    saveChanges: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.daysForPlan !== this.state.daysForPlan ||
      prevState.mealsForPlan !== this.state.mealsForPlan
    ) {
      let optionForPlan;

      prevState.daysForPlan !== this.state.daysForPlan
        ? (optionForPlan = [...this.state.daysForPlan])
        : (optionForPlan = [...this.state.mealsForPlan]);

      const arrChooseItems = optionForPlan.filter((item) => {
        return item.isChecked;
      });

      const nameChooseItems = arrChooseItems.map((item) => {
        return item.value;
      });

      if (prevState.daysForPlan !== this.state.daysForPlan) {
        this.setState({
          daysSetting: nameChooseItems,
        });
      } else {
        this.setState({
          mealsSetting: nameChooseItems,
        });
      }
    }

    if (prevState.allDaysForPlan !== this.state.allDaysForPlan) {
      if (this.state.allDaysForPlan.isChecked) {
        const daysForPlan = [...this.state.daysForPlan];

        const nameListDays = daysForPlan.map((item) => {
          return item.value;
        });

        this.setState({
          daysSetting: nameListDays,
        });
      } else {
        this.setState({
          daysSetting: [],
        });
      }
    }

    if (prevState.allMealsForPlan !== this.state.allMealsForPlan) {
      if (this.state.allMealsForPlan.isChecked) {
        const mealsForPlan = [...this.state.mealsForPlan];

        const nameListMeals = mealsForPlan.map((item) => {
          return item.value;
        });

        this.setState({
          mealsSetting: nameListMeals,
        });
      } else {
        this.setState({
          mealsSetting: [],
        });
      }
    }
  }

  handleChangeCheckedItem = (e) => {
    let optionForPlan;

    e.target.name === "daysForPlan"
      ? (optionForPlan = [...this.state.daysForPlan])
      : (optionForPlan = [...this.state.mealsForPlan]);

    const idChooseItem = optionForPlan.findIndex((item) => {
      return item.value === e.target.id;
    });

    optionForPlan[idChooseItem] = {
      ...optionForPlan[idChooseItem],
      isChecked: !optionForPlan[idChooseItem].isChecked,
    };

    if (e.target.name === "daysForPlan") {
      this.setState({
        daysForPlan: optionForPlan,
      });
    } else {
      this.setState({
        mealsForPlan: optionForPlan,
      });
    }
  };

  handleChangeAllCheckedDays = () => {
    this.setState((prevState) => ({
      daysForPlan: prevState.daysForPlan.map((item) => {
        return { ...item, isChecked: false };
      }),

      allDaysForPlan: {
        ...prevState.allDaysForPlan,
        isChecked: !prevState.allDaysForPlan.isChecked,
      },
    }));
  };

  handleChangeAllCheckedMeals = () => {
    this.setState((prevState) => ({
      mealsForPlan: prevState.mealsForPlan.map((item) => {
        return { ...item, isChecked: false };
      }),

      allMealsForPlan: {
        ...prevState.allMealsForPlan,
        isChecked: !prevState.allMealsForPlan.isChecked,
      },
    }));
  };

  handleRedirect = () => {
    this.setState({
      saveChanges: true,
    });
  };

  render() {
    const {
      allDaysForPlan,
      allMealsForPlan,
      daysForPlan,
      mealsForPlan,
      mealsSetting,
      daysSetting,
      saveChanges,
    } = this.state;

    const inputsDays = daysForPlan.map((item, id) => {
      return (
        <div key={id}>
          <input
            id={item.value}
            type="checkbox"
            name="daysForPlan"
            checked={item.isChecked}
            onChange={this.handleChangeCheckedItem}
            disabled={allDaysForPlan.isChecked ? true : false}
          />
          <label
            htmlFor={item.value}
            style={
              allDaysForPlan.isChecked ? { color: "#ddd" } : { color: "#000" }
            }
          >
            {item.value}
          </label>
        </div>
      );
    });

    const inputsMeals = mealsForPlan.map((item, id) => {
      return (
        <div key={id}>
          <input
            id={item.value}
            type="checkbox"
            name="mealsForPlan"
            checked={item.isChecked}
            onChange={this.handleChangeCheckedItem}
            disabled={allMealsForPlan.isChecked ? true : false}
          />
          <label
            htmlFor={item.value}
            style={
              allMealsForPlan.isChecked ? { color: "#ddd" } : { color: "#000" }
            }
          >
            {item.value}
          </label>
        </div>
      );
    });

    if (saveChanges) {
      return <Redirect to="/" exact />;
    }

    return (
      <>
        {this.props.statusSetStructureSettings ? (
          <>
            <Menu shoppingListLength={this.props.shoppingListLength} />
            <h4>
              Warning! If you save new structure setting, you delete previous
              added information: plan meals, shopping list, list dishes!
            </h4>
          </>
        ) : (
          "Please at the first, set planner structure"
        )}

        <section>
          <section>
            <h3>Please, choose days of week, which you want plan:</h3>
            <div>
              <input
                id={allDaysForPlan.value}
                type="checkbox"
                checked={allDaysForPlan.isChecked}
                onChange={this.handleChangeAllCheckedDays}
              />
              <label htmlFor={allDaysForPlan.value}>
                {allDaysForPlan.value}
              </label>
            </div>

            {inputsDays}
          </section>

          <section>
            <h3>Please, choose meals, which you want plan:</h3>
            <div>
              <input
                id={allMealsForPlan.value}
                type="checkbox"
                checked={allMealsForPlan.isChecked}
                onChange={this.handleChangeAllCheckedMeals}
              />
              <label htmlFor={allMealsForPlan.value}>
                {allMealsForPlan.value}
              </label>
            </div>

            {inputsMeals}
          </section>

          <button
            onClick={() => {
              this.props.handleSaveStructureSetting(daysSetting, mealsSetting);
              this.props.handleSaveNewStructureSetting();
              this.handleRedirect();
            }}
            disabled={
              daysSetting.length === 0 || mealsSetting.length === 0
                ? true
                : false
            }
          >
            save
          </button>
        </section>
      </>
    );
  }
}

export default StructureSettings;
