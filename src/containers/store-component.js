"use strict";
import Store from "../store/store.js";

export default class StoreComponent {
  constructor(props = {}) {
    let self = this;

    this.render = this.render || function () {};

    // Triggering a rerender if state changes
    if (props.store instanceof Store) {
      props.store.events.subscribe("stateChange", () => self.render());
    }

    if (props.hasOwnProperty("element")) {
      this.element = props.element;
    }
  }
}
