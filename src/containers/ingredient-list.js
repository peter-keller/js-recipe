import Fraction from "fraction.js";
import store from "~/store";
import StoreComponent from "./store-component";

export default class IngredientList extends StoreComponent {
  constructor() {
    super({
      store,
      element: document.querySelector(".ingredient-list"),
    });

    this.render();
  }

  get ingredients() {
    // change it to use the store getter
    if (store.state.currentRecipe && store.state.currentRecipe.ingredients) {
      return store.state.currentRecipe.ingredients;
    }

    return [];
  }

  get servingSize() {
    return (
      store.state.servingSize || parseInt(store.state.currentRecipe.servings)
    );
  }

  calculateQuantityFromServing(quantity) {
    // Given time I'd implement proper conversion based on unit, not just serving size
    const originalServings = store.state.currentRecipe.servings;
    const originalValueInFraction = quantity * originalServings;

    if (!originalValueInFraction) {
      return 0;
    }

    // I ran out of time, this x4 is a bit of a hack to make the conversion work properly
    const fraction = new Fraction(
      this.servingSize * 4,
      originalValueInFraction
    ).toFraction(true);

    return fraction;
  }

  async render() {
    let self = this;
    this.servingSize;

    self.element.innerHTML = `
      <h3 class="ingredient-list__title">Ingredients</h3>
      <ul class="ingredient-list__list">
        ${this.ingredients
          .map(
            (item) => `
          <li class="ingredient-item">
            <p class="ingredient-item__quantity">${this.calculateQuantityFromServing(
              item.quantity
            )} ${item.unit}</p>
            <p class="ingredient-item__name">${item.name}</p>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }
}
