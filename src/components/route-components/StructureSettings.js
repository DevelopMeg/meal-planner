import React, { Component } from "react";

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

    return (
      <>
        <section>
          <section>
            <h3>Please, choose days of week, which you want plan:</h3>
            <div>
              <input
                id={allDaysForPlan.value}
                type="checkbox"
                checked={allDaysForPlan.isChecked}
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
              />
              <label htmlFor={allMealsForPlan.value}>
                {allMealsForPlan.value}
              </label>
            </div>

            {inputsMeals}
          </section>

          <button>save</button>
        </section>
      </>
    );
  }
}

export default StructureSettings;
