'use strict';
class stdimg extends HTMLElement {
    connectedCallback() 
    {
        this.innerHTML = '';
        const img = this.attributes.src.value;
        let width = img.width, height = img.height;
        
        if(width !== 300) 
        {
            height *=  (300/width);
            width = 300;
        } 

        let canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        this.style = 
        {

        };
    }
}

customElements.define("stdimg", stdimg);