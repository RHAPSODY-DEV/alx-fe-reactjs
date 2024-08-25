// src/components/RecipeList.jsx
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  // Get the recipes from the store
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
