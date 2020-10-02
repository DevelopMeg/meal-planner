import React from "react";
import { useHistory } from "react-router-dom";
import MainStructureAddEditDish from "../subcomponents/MainStructureAddEditDish";

const AddDish = (props) => {
  const history = useHistory();

  const handleComeBack = () => {
    history.push("/list-dishes");
  };

  return (
    <section className="section-add-dish">
      <button
        className="btn-come-back"
        onClick={() => {
          props.handleClearValues();
          handleComeBack();
        }}
      >
        come back
      </button>

      <form
        className="form-dish"
        onSubmit={(e) => {
          props.handleAddDishToList(e);
          handleComeBack();
        }}
      >
        {props.mealsSet.length !== 0 && (
          <MainStructureAddEditDish
            titleForm="add new dish"
            titleBtnSubmit="add new dish to list"
            disabledCategory={false}
            infoDish={props.infoDish}
            mealsSet={props.mealsSet}
            handleChangeChooseCategory={props.handleChangeChooseCategory}
            handleChangeValueInfoDish={props.handleChangeValueInfoDish}
            handleAddIngredients={props.handleAddIngredients}
            handleDeleteIngredients={props.handleDeleteIngredients}
          />
        )}
      </form>
    </section>
  );
};

export default AddDish;
