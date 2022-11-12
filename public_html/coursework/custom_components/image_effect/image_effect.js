// import more_boxes from "../image_effect/more_boxes.js"

const template = document.createElement('template')

template.innerHTML = `
    <link rel="stylesheet" href="custom_components/image_effect/style.css">

    <section>
        <h2></h2>
        <div id="banner">
            <div id="blocks"></div>
        </div>
        <p> I am learning <slot name="language"/>  </p>
        <p> I want to be a <slot name="career" </p>
    </section>
`

class ImageEffect extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
        
    //     // for (var i = 1; i < 400; i++) {
    //     // image_effect.js:24 Uncaught TypeError: Cannot read properties of undefined (reading 'innerHTML') :
    //     // this.shadowRoot.getElementById('banner')[0].innerHTML += "<div class='blocks'></div>"
    //     // this.shadowRoot.getElementById('blocks')[i].style.animationDelay = `${i * 0.05}s`
    //     // }
    // }

    }

    static get observedAttributes() {
        return ['name']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name')
    }
}

export default ImageEffect;