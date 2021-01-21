import logo from "../assets/images/logo.png";

export class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <nav class="navbar">
        <a href="/">
          <div class="navbar__brand">
            <img src="${logo}" alt="Itech Media" />
          </div>
        </a>
      </nav>
    `;
  }
}

customElements.define("nav-bar", Navbar);
