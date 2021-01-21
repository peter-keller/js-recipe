import "~/styles/index.scss";
import "~/components/navbar";
import store from "./store/index.js";

import IngredientList from "~/containers/ingredient-list";
import ServingCalculator from "~/components/serving-calculator";
import InstructionsList from "~/containers/instructions-list";

if (process.env.NODE_ENV === "development") {
  require("./index.html");
}

// Emitting initial API call to fetch recipes on app start
(async () => {
  await store.dispatch("fetchRecipes");
})();

const ingredientListInstance = new IngredientList();
const servingCalculatorInstance = new ServingCalculator();
const instructionsListInstance = new InstructionsList();

ingredientListInstance.render();
servingCalculatorInstance.render();
instructionsListInstance.render();
