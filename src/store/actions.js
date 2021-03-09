const BASE_URL = "http://18.130.116.85";
const API = { RECIPES: `${BASE_URL}/recipes` };

export default {
  async fetchRecipes(context) {
    // Ideally would create an API service to make it more reusable
    try {
      const response = await fetch(API.RECIPES, {
        method: "POST",
      });

      const responseJson = await response.json();

      context.commit("SET_RECIPES", responseJson);
      context.commit("SET_ACTIVE_RECIPE", responseJson[1]);
    } catch (e) {
      // TODO: Handle error when more time available
      console.error(e);
      return {};
    }
  },

  setActiveRecipe(context) {
    const id = context.state.currentRecipeIndex;
    const recipe = context.state.recipes[id];

    context.commit("SET_ACTIVE_RECIPE", recipe);
  },

  setServingSize(context, size) {
    context.commit("SET_SERVING_SIZE", size);
  },

  setRecipeIndex(context, index) {
    context.commit("SET_RECIPE_INDEX", index);
  },
};
