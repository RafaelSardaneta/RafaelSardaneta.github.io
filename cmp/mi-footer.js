class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Rafael Sardaneta Rendon
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
