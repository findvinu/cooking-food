import React from "react";
import IngredientList from "./IngredientList";

export default function Recipe(props) {
  const { id, name, cookTime, servings, instructions, ingredients, handleRecipeDelete, handleRecipeSelect } = props;

  return (
    <div className="recipe">
   <div className="headBtn dflex">
   <h3>{name}</h3>
      <div>
        <button className="btn btn--primary btnEdit mr5" onClick={() => handleRecipeSelect(id)}>Edit</button>
        <button className="btn btnDelete btn--secondary" onClick={() => handleRecipeDelete(id)}>Delete</button>
      </div>
      </div>
      <div>
        <span>Cook Time: </span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings: </span>
        <span>{servings}</span>
      </div>
      <div>
        <h4>Instructions: </h4>
        <span>{instructions}</span>
      </div>
      <div>
        <h4>Ingredients: </h4>
        <IngredientList ingredients={ingredients} />
      </div>
    </div>
  );
}
