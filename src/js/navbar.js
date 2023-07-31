class navbar extends HTMLElement 
{
    constructor() 
    {
      super();
    }
    connectedCallback() 
    {
      switch(this.attributes.selected.value)
      {
        case "HOME":
          this.innerHTML =
            `<dl class="navContainer"> 
            <dd class="title" /> <img alt="website icon" src="../../assets/icon.svg" height=50 width=50 /> <p class="navItemText"> All About Computers </p>
            <dd class="navItemSelected" /> <a href="Home.html" class="navItemText"> Home </a> 
            <dd class="navItem" /> <a href="CPU.html" class="navItemText"> CPU </a> 
            <dd class="navItem" /> <a href="GPU.html" class="navItemText"> GPU </a> 
            <dd class="navItem" /> <a href="MB.html" class="navItemText"> Motherboard </a>
            <dd class="navItem" /> <a href="RAM.html" class="navItemText"> RAM </a>
            <dd class="navItem"> <a href="mailto:deepinder.mann2024@gmail.com" class="navItemText"> Contact Me! </a>
            </dl>`;
          break;
        case "CPU":
          this.innerHTML =
            `<dl class="navContainer"> 
            <dd class="title" /> <img alt="website icon" src="../../assets/icon.svg" height=50 width=50 /> <p class="navItemText"> All About Computers </p>
            <dd class="navItem" /> <a href="Home.html" class="navItemText"> Home </a> 
            <dd class="navItemSelected" /> <a href="CPU.html" class="navItemText"> CPU </a> 
            <dd class="navItem" /> <a href="GPU.html" class="navItemText"> GPU </a> 
            <dd class="navItem" /> <a href="MB.html" class="navItemText"> Motherboard </a>
            <dd class="navItem" /> <a href="RAM.html" class="navItemText"> RAM </a>
            <dd class="navItem"> <a href="mailto:deepinder.mann2024@gmail.com" class="navItemText"> Contact Me! </a>
            </dl>`;
          break;
        case "GPU":
          this.innerHTML =
            `<dl class="navContainer"> 
            <dd class="title" /> <img alt="website icon" src="../../assets/icon.svg" height=50 width=50 /> <p class="navItemText"> All About Computers </p>
            <dd class="navItem" /> <a href="Home.html" class="navItemText"> Home </a> 
            <dd class="navItem"> <a href="CPU.html" class="navItemText"> CPU </a> 
            <dd class="navItemSelected"> <a href="GPU.html" class="navItemText"> GPU </a> 
            <dd class="navItem"> <a href="MB.html" class="navItemText"> Motherboard </a>
            <dd class="navItem"> <a href="RAM.html" class="navItemText"> RAM </a>
            <dd class="navItem"> <a href="mailto:deepinder.mann2024@gmail.com" class="navItemText"> Contact Me! </a>
            </dl>`;
          break;
        case "MB":
          this.innerHTML =
            `<dl class="navContainer">
            <dd class="title" /> <img alt="website icon" src="../../assets/icon.svg" height=50 width=50 /> <p class="navItemText"> All About Computers </p> 
            <dd class="navItem" /> <a href="Home.html" class="navItemText"> Home </a> 
            <dd class="navItem"> <a href="CPU.html" class="navItemText"> CPU </a> 
            <dd class="navItem"> <a href="GPU.html" class="navItemText"> GPU </a> 
            <dd class="navItemSelected"> <a href="MB.html" class="navItemText"> Motherboard </a>
            <dd class="navItem"> <a href="RAM.html" class="navItemText"> RAM </a>
            <dd class="navItem"> <a href="mailto:deepinder.mann2024@gmail.com" class="navItemText"> Contact Me! </a>
            </dl>`;
          break;
        case "RAM":
          this.innerHTML =
            `<dl class="navContainer"> 
            <dd class="title" /> <img alt="website icon" src="../../assets/icon.svg" height=50 width=50 /> <p class="navItemText"> All About Computers </p>
            <dd class="navItem" /> <a href="Home.html" class="navItemText"> Home </a> 
            <dd class="navItem"> <a href="CPU.html" class="navItemText"> CPU </a> 
            <dd class="navItem"> <a href="GPU.html" class="navItemText"> GPU </a> 
            <dd class="navItem"> <a href="MB.html" class="navItemText"> Motherboard </a>
            <dd class="navItemSelected"> <a href="RAM.html" class="navItemText"> RAM </a>
            <dd class="navItem"> <a href="mailto:deepinder.mann2024@gmail.com" class="navItemText"> Contact Me! </a>
            </dl>`;
          break;
        default:
          this.innerHTML =
            `<dl class="navContainer"> 
            <dd class="title" /> <img alt="website icon" src="../../assets/icon.svg" height=50 width=50 /> <p class="navItemText"> All About Computers </p>
            <dd class="navItem" /> <a href="Home.html" class="navItemText"> Home </a> 
            <dd class="navItem"> <a href="CPU.html" class="navItemText"> CPU </a> 
            <dd class="navItem"> <a href="GPU.html" class="navItemText"> GPU </a> 
            <dd class="navItem"> <a href="MB.html" class="navItemText"> Motherboard </a>
            <dd class="navItem"> <a href="RAM.html" class="navItemText"> RAM </a>
            <dd class="navItem"> <a href="mailto:deepinder.mann2024@gmail.com" class="navItemText"> Contact Me! </a>
            </dl>`;
          break;
      }
      
    }
}

customElements.define('nav-bar', navbar);