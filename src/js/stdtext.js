class stdtext extends HTMLElement
{
  constructor()
  {
    super();
  }

  connectedCallback()
  {
    const content = this.innerHTML;
      this.innerHTML = `
        <div class="stdContainer">
          <p class="stdText"> ${content} </p>
        </div>
      `
  }
}
customElements.define('std-text', stdtext);