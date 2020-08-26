import React from "react";
import { useHistory } from "react-router-dom";
import MainStructureAddEditDish from "../subcomponents/MainStructureAddEditDish";

const AddDish = (props) => {
  const history = useHistory();

  const handleComeBack = () => {
    history.push("/list-dishes");
  };

  return (
    <>
      <button
        onClick={() => {
          props.handleClearValues();
          handleComeBack();
        }}
      >
        come back
      </button>

      <form>
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
      </form>
    </>
  );
};

export default AddDish;
