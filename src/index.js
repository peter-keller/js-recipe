import "~/styles/index.scss";
import "~/components/navbar";
import store from "./store/index.js";

import IngredientList from "~/containers/ingredient-list";
import ServingCalculator from "~/components/serving-calculator";
import InstructionsList from "~/containers/instructions-list";
import RecipeNavigation from "~/containers/recipe-navigation";

if (process.env.NODE_ENV === "development") {
  require("./index.html");
}

// Emitting initial API call to fetch recipes on app start
(async () => {
  await store.dispatch("fetchRecipes");
})();

new IngredientList();
new ServingCalculator();
new InstructionsList();
new RecipeNavigation();
