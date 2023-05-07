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

export async function getRecipesCount() {
  const unparsedRecipesCount = await 
    fetch(`${hostName}/v1/recipes/count.json`)
    .then(data => data.json());
  
  const recipes_count = JSON.parse(JSON.stringify(unparsedRecipesCount)).recipes_count;
  return recipes_count
}

export async function getMaterial(materialId: Number) {
  const unparsedMaterial = await 
    fetch(`${hostName}/v1/materials/${materialId}.json`)
    .then(data => data.json());
  
  const material = JSON.parse(JSON.stringify(unparsedMaterial)).material;
  return material
}
