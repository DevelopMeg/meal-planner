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
      <section className="section-edit-dish">
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
            props.handleEditDish(e);
            props.handleClearValues();
            handleComeBack();
          }}
        >
          {props.mealsSet.length !== 0 && (
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
          )}
        </form>
      </section>
    </>
  );
};

export default EditDish;
