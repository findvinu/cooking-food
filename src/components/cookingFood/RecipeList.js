import React from "react";       
import Recipe from "./Recipe";

export default function RecipeList(props) {
  const { recipes, handleRecipeAdd, handleRecipeDelete, handleRecipeSelect, hangleRecipeChange } = props;
  return (
   
      <div className="recipeWrapper">
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              {...recipe}
              handleRecipeDelete={handleRecipeDelete}
              handleRecipeSelect={handleRecipeSelect}
            />
          );
        })}
        <button
          className="btn btn--primary addRecipeBtn"
          onClick={handleRecipeAdd}
        >
          Add Recipe
        </button>
      </div>
  );
}
