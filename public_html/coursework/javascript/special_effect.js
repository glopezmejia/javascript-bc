// this is a module

import { asyncLoadImage } from "./load_image.js"

let url = 'images/people2.jpg'
asyncLoadImage(url)


export async function add_special_event() {

    const banner = document.getElementsByClassName('banner')[0]
    const blocks = document.getElementsByClassName('blocks')

    for (var i = 1; i < 400; i++) {
        banner.innerHTML += "<div class='blocks'></div>"
        blocks[i].style.animationDelay = `${i * 0.05}s`
    }

}