
// Boxes

let box1 = document.createElement("div")
box1.setAttribute("class", "box1-div colored-box")
let text_box1 = document.createTextNode("I have equal sides") 
box1.appendChild(text_box1)

let box2 = document.createElement("div")
box2.setAttribute("class", "box2-div colored-box")
let text_box2 = document.createTextNode("I am longer and shorter") 
box2.appendChild(text_box2)

let box3 = document.createElement("div")
box3.setAttribute("class", "box3-div colored-box")
let text_box3 = document.createTextNode("I am the tallest and skinniest")
box3.appendChild(text_box3)

let mainElement = document.querySelector("main")
console.log("main")

mainElement.appendChild(box1)
mainElement.appendChild(box2)
mainElement.appendChild(box3)


// Buttons


let sectionElement = document.querySelector("section")
console.log("section")

let btn_append_box = document.createElement("button")
btn_append_box.setAttribute("type", "button")
btn_append_box.setAttribute("id", "btn-append-box")
let text_append = document.createTextNode("Append Box")
btn_append_box.appendChild(text_append)
btn_append_box.addEventListener("click", append_box_handler)


let btn_remove_box = document.createElement("button")
let text_remove = document.createTextNode("Remove Box")
btn_remove_box.appendChild(text_remove)
btn_remove_box.setAttribute("type", "button")
btn_remove_box.setAttribute("id", "btn-remove-box")
btn_remove_box.addEventListener("click", remove_box_handler)


let btn_modify_box = document.createElement("button")
let text_modify = document.createTextNode("Modify Box")
btn_modify_box.appendChild(text_modify)
btn_modify_box.setAttribute("type", "button")
btn_modify_box.setAttribute("id", "btn-modify-box")
btn_modify_box.addEventListener("click", modify_box_handler)


let btn_mystery_box = document.createElement("button")
let text_mystery = document.createTextNode("Mystery Box")
btn_mystery_box.appendChild(text_mystery)
btn_mystery_box.setAttribute("type", "button")
btn_mystery_box.setAttribute("id", "btn-mystery-box")
btn_mystery_box.addEventListener("click", mystery_box_handler)

sectionElement.appendChild(btn_append_box)
sectionElement.appendChild(btn_remove_box)
sectionElement.appendChild(btn_modify_box)
sectionElement.appendChild(btn_mystery_box)


//handlers


function append_box_handler () {
    let new_box = document.createElement("div")
    new_box.setAttribute("class", "box4-div colored-box")
    let new_text = document.createTextNode("hi")
    new_box.appendChild(new_text)
    mainElement.appendChild(new_box)
}

function remove_box_handler () {
    mainElement.removeChild(mainElement.firstChild)
}

function modify_box_handler () {
    mainElement.firstChild.setAttribute ("class", "box4-div colored-box")
}

function mystery_box_handler () {

    let mystery_text = document.createTextNode ("Here's a joke for you: What is it called when computer programmers taunt and make fun of each other on social media? It is called cyber boolean!")
    
    let mystery_box = document.createElement("div")
    mystery_box.setAttribute("class", "box5-div colored-box")
    mystery_box.appendChild(mystery_text)
    mainElement.prepend(mystery_box)
    // mainElement.appendChild(mystery_box)

}





