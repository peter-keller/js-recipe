export default {
  SET_RECIPES(state, payload) {
    state.recipes = payload;

    return state;
  },

  SET_ACTIVE_RECIPE(state, payload) {
    state.currentRecipe = payload;

    return state;
  },

  SET_SERVING_SIZE(state, payload) {
    state.servingSize = payload;

    return state;
  },
};
