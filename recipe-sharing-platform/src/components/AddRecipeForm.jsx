import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!title || !ingredients || !steps) {
      setError('All fields are required');
      return;
    }
    if (ingredients.split(',').length < 2) {
        setError('Please include at least two ingredients.');
        return;
      }
      

    // Split ingredients and steps into arrays (if needed for backend)
    const ingredientsArray = ingredients.split(',');
    const stepsArray = steps.split('.');

    // Display form data (replace with logic to post the data to a server)
    const newRecipe = {
      title,
      ingredients: ingredientsArray,
      steps: stepsArray,
    };

    console.log('New Recipe:', newRecipe);

    // Reset form fields after submission
    setTitle('');
    setIngredients('');
    setSteps('');
    setError('');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Add a New Recipe</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Recipe Title</label>
          <input
            id="title"
            type="text"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="ingredients">Ingredients (comma-separated)</label>
          <textarea
            id="ingredients"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="steps">Preparation Steps (end each step with a period)</label>
          <textarea
            id="steps"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
