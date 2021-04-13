class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
       
        Escamilla perez Cristian.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
