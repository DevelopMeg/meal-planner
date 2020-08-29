import React from "react";
import { useHistory } from "react-router-dom";
import MainStructureAddEditDish from "../subcomponents/MainStructureAddEditDish";

const EditDish = (props) => {
  const history = useHistory();

  const handleComeBack = () => {
    history.push("/list-dishes");
  };

  return (
    <>
      <section>
        <button
          onClick={() => {
            props.handleClearValues();
            handleComeBack();
          }}
        >
          come back
        </button>
        <form
          onSubmit={(e) => {
            props.handleEditDish(e);
            props.handleClearValues();
            handleComeBack();
          }}
        >
          <MainStructureAddEditDish
            titleForm="edit dish"
            titleBtnSubmit="save changes"
            disabledCategory={true}
            infoDish={props.infoDish}
            mealsSet={props.mealsSet}
            handleChangeChooseCategory={props.handleChangeChooseCategory}
            handleChangeValueInfoDish={props.handleChangeValueInfoDish}
            handleAddIngredients={props.handleAddIngredients}
            handleDeleteIngredients={props.handleDeleteIngredients}
          />
        </form>
      </section>
    </>
  );
};

export default EditDish;
