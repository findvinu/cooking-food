import React from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import "../../css/recipeEdit.css";

export default function RecipeEdit({ recipe, hangleRecipeChange }) {
  const handleChange = (changes) => {
    hangleRecipeChange(recipe.id, { ...recipe, ...changes });
  };

  const hangleIngredientChange = (id, ingredient) => {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex(
      (ingredient) => ingredient.id === id
    );
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  };

  return (
    <form>
      <button
        style={{ display: "flex", marginLeft: "auto", marginBottom: "10px" }}
        className="btn"
        onClick={() => hangleRecipeChange(undefined)}
      >
        &times;
      </button>
      <div>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          className="input"
          type="text"
          id="name"
          value={recipe.name}
          onChange={(e) => handleChange({ name: e.target.value })}
        />
      </div>
      <div>
        <label className="label" htmlFor="cookTime">
          Cook Time
        </label>
        <input
          className="input"
          type="text"
          id="cookTime"
          value={recipe.cookTime}
          onChange={(e) => handleChange({ cookTime: e.target.value })}
        />
      </div>
      <div>
        <label className="label" htmlFor="servings">
          Servings
        </label>
        <input
          className="input"
          type="text"
          id="servings"
          value={recipe.servings}
          onChange={(e) =>
            handleChange({ servings: parseInt(e.target.value) || "" })
          }
        />
      </div>
      <div>
        <label className="label" htmlFor="instructions">
          Instructions
        </label>
        <textarea
          className="textarea"
          rows={5}
          id="instructions"
          value={recipe.instructions}
          onChange={(e) => handleChange({ instructions: e.target.value })}
        />
      </div>

      {recipe.ingredients.map((ingredient) => (
        <RecipeIngredientEdit
          key={ingredient.id}
          ingredient={ingredient}
          hangleIngredientChange={hangleIngredientChange}
        />
      ))}
      <button
        className="btn btn--primary addRecipeBtn"
        style={{ marginTop: "20px" }}
        // onClick={handleRecipeAdd}
      >
        Add Ingredient
      </button>
    </form>
  );
}
