class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Escamilla perez Cristian.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
