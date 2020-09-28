import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Menu from "../subcomponents/Menu";

class StructureSettings extends Component {
  state = {
    allDaysForPlan: { value: "All (7)", isChecked: false },
    daysForPlan: [
      { value: "Monday", isChecked: false },
      { value: "Tuesday", isChecked: false },
      { value: "Wednesday", isChecked: false },
      { value: "Thursday", isChecked: false },
      { value: "Friday", isChecked: false },
      { value: "Saturday", isChecked: false },
      { value: "Sunday", isChecked: false },
    ],
    allMealsForPlan: { value: "All (5)", isChecked: false },
    mealsForPlan: [
      { value: "Breakfast", isChecked: false },
      { value: "Lunch", isChecked: false },
      { value: "Dinner", isChecked: false },
      { value: "Dessert", isChecked: false },
      { value: "Supper", isChecked: false },
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
        <div key={id} className="option-item">
          <input
            id={item.value}
            type="checkbox"
            name="daysForPlan"
            checked={item.isChecked}
            onChange={this.handleChangeCheckedItem}
            disabled={allDaysForPlan.isChecked ? true : false}
            className="option-item__checkbox"
          />
          <label
            htmlFor={item.value}
            style={
              allDaysForPlan.isChecked ? { color: "#ddd" } : { color: "#000" }
            }
            className="option-item__name"
          >
            {item.value}
          </label>
        </div>
      );
    });

    const inputsMeals = mealsForPlan.map((item, id) => {
      return (
        <div key={id} className="option-item">
          <input
            id={item.value}
            type="checkbox"
            name="mealsForPlan"
            checked={item.isChecked}
            onChange={this.handleChangeCheckedItem}
            disabled={allMealsForPlan.isChecked ? true : false}
            className="option-item__checkbox"
          />
          <label
            htmlFor={item.value}
            style={
              allMealsForPlan.isChecked ? { color: "#ddd" } : { color: "#000" }
            }
            className="option-item__name"
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
          <Menu shoppingListLength={this.props.shoppingListLength} />
        ) : null}
        <section
          className={
            this.props.statusSetStructureSettings
              ? "section-settings section-settings--warning"
              : "section-settings"
          }
        >
          {this.props.statusSetStructureSettings ? (
            <h4 className="section-settings__info section-settings__info--warning">
              <span style={{ color: "#ff0000" }}>Warning!</span> If you save new
              structure setting, you delete previous added information: plan
              meals, shopping list, list dishes!
            </h4>
          ) : (
            <h4 className="section-settings__info">
              Please at the first, set planner structure
            </h4>
          )}

          <section className="setting-option">
            <h3 className="setting-option__title">
              Choose days of week, which you want plan:
            </h3>

            <div className="option-items">
              <div className="option-item">
                <input
                  id={allDaysForPlan.value}
                  type="checkbox"
                  checked={allDaysForPlan.isChecked}
                  onChange={this.handleChangeAllCheckedDays}
                  className="option-item__checkbox"
                />
                <label
                  htmlFor={allDaysForPlan.value}
                  className="option-item__name"
                >
                  {allDaysForPlan.value}
                </label>
              </div>

              {inputsDays}
            </div>
          </section>

          <section className="setting-option">
            <h3 className="setting-option__title">
              Choose meals, which you want plan:
            </h3>

            <div className="option-items">
              <div className="option-item">
                <input
                  id={allMealsForPlan.value}
                  type="checkbox"
                  checked={allMealsForPlan.isChecked}
                  onChange={this.handleChangeAllCheckedMeals}
                  className="option-item__checkbox"
                />
                <label
                  htmlFor={allMealsForPlan.value}
                  className="option-item__name"
                >
                  {allMealsForPlan.value}
                </label>
              </div>

              {inputsMeals}
            </div>
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
            className="section-settings__save-btn"
          >
            save
          </button>
        </section>
      </>
    );
  }
}

export default StructureSettings;
