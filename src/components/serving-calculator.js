import store from "~/store";
import StoreComponent from "~/containers/store-component";

export default class ServingCalculator extends StoreComponent {
  constructor() {
    super({
      store,
      element: document.querySelector(".serving-calculator"),
    });
  }

  get defaultServings() {
    return parseInt(store.state.currentRecipe.servings);
  }

  get servingSize() {
    return store.state.servingSize;
  }

  async render() {
    let self = this;

    self.element.innerHTML = `
      <h3 class="serving-calculator__title">Servings</h3>
      <form class="serving-calculator__form">
        <input class="serving-calculator__input" id="serving-input" placeholder="Enter Number of Servings" />
        <button class="btn btn__primary" type="submit">Calculate</button>
      </form>
    `;

    document
      .querySelector(".serving-calculator__form")
      .addEventListener("submit", (event) => {
        event.preventDefault();

        const inputElement = document.getElementById("serving-input");
        let value = inputElement.value.trim();

        if (value.length) {
          store.dispatch("setServingSize", value);
          inputElement.value = "";
          inputElement.focus();
        }
      });
  }
}
