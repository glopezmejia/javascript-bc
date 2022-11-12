
function create_side_fish () {
    let side_fish_img = document.createElement("img")
    side_fish_img.id = "side-fish-img"
    let url = "images/side-fish.png"
    side_fish_img.setAttribute("src", url)
    document.body.appendChild(side_fish_img)
}

function create_front_fish () {
    let front_fish_img = document.createElement("img")
    front_fish_img.id = "front-fish-img"
    let url = "images/front-fish.png"
    front_fish_img.setAttribute("src", url)
    document.body.appendChild(front_fish_img)
}

function create_big_fish () {
    let big_fish_img = document.createElement("img")
    big_fish_img.id = "big-fish-img"
    let url = "images/big-fish.png"
    big_fish_img.setAttribute("src", url)
    document.body.appendChild(big_fish_img)
}

function create_bubbles () {
    let bubbles_img = document.createElement("img")
    bubbles_img.id = "bubbles-img"
    let url = "images/bubbles-img.png"
    bubbles_img.setAttribute("src", url)
    document.body.appendChild(bubbles_img)
}

create_side_fish()
create_front_fish()
create_big_fish()
create_bubbles()


setInterval(create_front_fish, 15000)
setInterval(create_bubbles, 15000)
setInterval(create_side_fish, 15000)
setInterval(create_big_fish, 20000)


// let background_img = document.createElement("img")
// let url = "images/fishTank.jpg"
// background_img.setAttribute("id", "background-img")
// background_img.setAttribute("src", url)
// document.body.appendChild(background_img)