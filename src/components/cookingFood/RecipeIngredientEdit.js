import React from "react";

export default function RecipeIngredientEdit(props) {
  const { ingredient, hangleIngredientChange } = props;

  const handleChange = (changes) => {
    hangleIngredientChange(ingredient.id, {...ingredient, ...changes})
}

  return (
    <div className="recipeIngreEdit" style={{display:'flex', alignItem:'center'}}>
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            value={ingredient.name}
            onChange={e => handleChange({ name: e.target.value})}
          />
            <input
            className="input"
            type="text"
            name="name"
            id="name"
            value={ingredient.amount}
            onChange={e => handleChange({ amount: e.target.value})}
          />
          <button className="btn btn--secondary">&times;</button>
        </div>
  );
}
