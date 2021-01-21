import store from "~/store";
import StoreComponent from "./store-component";

export default class IngredientList extends StoreComponent {
  constructor() {
    super({
      store,
      element: document.querySelector(".ingredient-list"),
    });
  }

  get ingredients() {
    // change it to use the store getter
    if (store.state.currentRecipe && store.state.currentRecipe.ingredients) {
      return store.state.currentRecipe.ingredients;
    }

    return [];
  }

  async render() {
    let self = this;

    self.element.innerHTML = `
      <h3 class="ingredient-list__title">Ingredients</h3>
      <ul class="ingredient-list__list">
        ${this.ingredients
          .map(
            (item) => `
          <li class="ingredient-item">
            <p class="ingredient-item__quantity">${item.quantity} ${item.unit}</p>
            <p class="ingredient-item__name">${item.name}</p>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }
}
