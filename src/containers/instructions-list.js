import store from "~/store";
import StoreComponent from "./store-component";

export default class InstructionsList extends StoreComponent {
  constructor() {
    super({
      store,
      element: document.querySelector(".instructions-list"),
    });
  }

  get instructions() {
    // change it to use the store getter
    if (store.state.currentRecipe && store.state.currentRecipe.instructions) {
      return Object.values(store.state.currentRecipe.instructions);
    }

    return [];
  }

  async render() {
    let self = this;

    self.element.innerHTML = `
      <h3 class="instructions-list__title">Instructions</h3>
      <ul class="instructions-list__list">
        ${this.instructions
          .map(
            (instruction, index) => `
          <li class="instruction-step">
            <p>${index + 1}.</p>
            <p>${instruction.text}</p>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }
}
