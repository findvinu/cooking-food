import { useState, useEffect, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const CookingContext = createContext({});

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    cookTime: "1:45",
    servings: "3",
    instructions:
      "1. Put salt on chicken \n 2. Put chicken in oven \n 3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounts",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Tbs",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Pork",
    cookTime: "0:45",
    servings: "5",
    instructions: [
      "1. Put paprika on chicken \n 2. Put pork in oven \n 3. Eat pork",
    ],
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 Pounts",
      },
      {
        id: 2,
        name: "Paprika",
        amount: "2 Tbs",
      },
    ],
  },
];

const LOCAL_STORAGE_KYE = "cookingfood.recipe";

const CookingContextProvider = ({ chidlren }) => {
  const [selectRecipeId, setSelectRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);  
  const seletedRecipe = recipes.find((recipe) => recipe.id === selectRecipeId);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KYE);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KYE, JSON.stringify(recipes));
  }, [recipes]);

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      cookTime: "",
      servings: 1,
      instructions: "",
      ingredients: [{ id: uuidv4(), name: "", amount: "" }],
    };
    setSelectRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe]);
  };

  const hangleRecipeChange = (id, recipe) => {
    const newRecipes = [...recipes];
    const index = newRecipes.findIndex(recipe => recipe.id === id);
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  const handleRecipeDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  const handleRecipeSelect = (id) => {
    setSelectRecipeId(id);
  };

  const value = {
    seletedRecipe,
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    hangleRecipeChange,
  }

  return (
    <CookingContext.Provider value={value}>
      {chidlren}
    </CookingContext.Provider>
  );
};

export default CookingContextProvider;
