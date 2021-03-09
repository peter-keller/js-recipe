import store from "~/store";
import StoreComponent from "./store-component";

export default class RecipeNavigation extends StoreComponent {
  constructor() {
    super({
      store,
      element: document.querySelector(".recipe-navigation"),
    });
  }

  get currentIndex() {
    return store.state.currentRecipeIndex;
  }

  async render() {
    const self = this;

    self.element.innerHTML = `
      <div class="recipe-navigation">
        <button id="prev"><</button>
        <button id="next">></button>
      </div>
    `;

    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    prevButton.addEventListener("click", () => {
      store.dispatch("setRecipeIndex", this.currentIndex - 1);
      store.dispatch("setActiveRecipe");
    });

    nextButton.addEventListener("click", () => {
      store.dispatch("setRecipeIndex", this.currentIndex + 1);
      store.dispatch("setActiveRecipe");
    });
  }
}
