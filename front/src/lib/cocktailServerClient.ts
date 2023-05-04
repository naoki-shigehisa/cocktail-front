const hostName = 'https://api.cockhome.com/api/'

export async function getRecipe(recipeId: Number) {
  const unparsedRecipe = await 
    fetch(`${hostName}/v1/recipes/${recipeId}.json`)
    .then(data => data.json());
  
  const recipe = JSON.parse(JSON.stringify(unparsedRecipe)).recipe;
  return recipe
}

export async function getLatestRecipes() {
  const unparsedRecipes = await 
    fetch(`${hostName}/v1/recipes/latests.json`)
    .then(data => data.json());
  
  const recipes = JSON.parse(JSON.stringify(unparsedRecipes)).recipes;
  return recipes
}
