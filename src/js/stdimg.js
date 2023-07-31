class stdimg extends HTMLElement 
{
    constructor() 
    {
      super();
    }
    connectedCallback()
    {
        const src = this.attributes.src.value;
        const caption = this.innerHTML;
        const alt = this.attributes.alt.value;
        
        // console.log(caption);
        this.innerHTML = `     
        <div class="imgContainer">
            <img class="imgContainerImg" src=${src} height=${this.attributes.height.value} width=${this.attributes.width.value} alt=${alt}> <img>
            <div class="imgContainerElement"> 
                <p class="imgContainerText"> ${caption} </p>
            </div>
        </div>
        `
    }
    
}

customElements.define('std-img', stdimg);