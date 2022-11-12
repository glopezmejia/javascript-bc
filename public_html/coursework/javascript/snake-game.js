
function moveToRandomLocation(elm) {
    let mainWidth = +(window.getComputedStyle(main).getPropertyValue('width').match(/\d+/))
    let mainHeight = +(window.getComputedStyle(main).getPropertyValue('height').match(/\d+/))

    let elmWidth = +(window.getComputedStyle(elm).getPropertyValue('width').match(/\d+/))
    let elmHeight = +(window.getComputedStyle(elm).getPropertyValue('height').match(/\d+/))

    let numCols = Math.floor(mainWidth / elmWidth)
    let numRows = Math.floor(mainHeight / elmHeight)

    let col = Math.floor(Math.random() * numCols)
    let row = Math.floor(Math.random() * numRows)

    elm.style.left = (col * elmWidth) + "px"
    elm.style.top = (row * elmHeight) + "px"
}

let changeDirection = function (event) {

    let key = event.keyCode

    if (key == 37) {
        currentDirection = "left";
    }
    else if (key == 38) {
        currentDirection = "up";
    }
    else if (key == 39) {
        currentDirection = "right"
    }
    else if (key == 40) {
        currentDirection = "down"
    }

    console.log(currentDirection)
}

function moveSnake() {

    let tail = snake.firstElementChild
    let head = snake.lastElementChild

    if (tail.classList.contains('hidden')) {
        tail.classList.remove('hidden')
    }

    let snakeTop = +(window.getComputedStyle(head).getPropertyValue('top').match(/\d+/))
    let snakeLeft = +(window.getComputedStyle(head).getPropertyValue('left').match(/\d+/))

    let snakeWidth = +(window.getComputedStyle(head).getPropertyValue('width').match(/\d+/))
    let snakeHeight = +(window.getComputedStyle(head).getPropertyValue('height').match(/\d+/))

    if (currentDirection === "left") {
        snakeLeft -= snakeWidth;
    }
    else if (currentDirection === "up") {
        snakeTop -= snakeHeight;
    }
    else if (currentDirection === "right") {
        snakeLeft += snakeWidth;
    }
    else if (currentDirection === "down") {
        snakeTop += snakeHeight;
    }

    tail.style.left = snakeLeft + "px"
    tail.style.top = snakeTop + "px"

    snake.removeChild(tail)
    snake.appendChild(tail)

    if (snakeCollidesWithApple()) {
        document.dispatchEvent(collision)
    }
}

function snakeCollidesWithApple() {
    let head = snake.lastElementChild

    let headTop = +(window.getComputedStyle(head).getPropertyValue('top').match(/\d+/))
    let headLeft = +(window.getComputedStyle(head).getPropertyValue('left').match(/\d+/))

    let appleTop = +(window.getComputedStyle(apple).getPropertyValue('top').match(/\d+/))
    let appleLeft = +(window.getComputedStyle(apple).getPropertyValue('left').match(/\d+/))

    let headWidth = +(window.getComputedStyle(head).getPropertyValue('width').match(/\d+/))
    let headHeight = +(window.getComputedStyle(head).getPropertyValue('height').match(/\d+/))

    let dTop = Math.abs(headTop - appleTop)
    let dLeft = Math.abs(headLeft - appleLeft)

    if (dTop < headHeight && dLeft < headWidth) {
        return true
    }
    return false
}

function lengthenSnake() {
    let segment = document.createElement("div")
    segment.className = "snake hidden"

    snake.prepend(segment)
}

let currentDirection = "right"

let main = document.querySelector("main")
let snake = document.querySelector("#snake")

let apple = document.createElement("img")
apple.src = "images/apple.png"
main.appendChild(apple)

let head = document.createElement("div")
head.className = "snake"
snake.appendChild(head)

main.focus = true;

moveToRandomLocation(apple)



document.body.addEventListener("keydown", changeDirection)

let collision = new CustomEvent("collision", { detail: "snake" })

document.addEventListener("collision", (e) => {
    moveToRandomLocation(apple)
    lengthenSnake()
})

let timerID = setInterval(moveSnake, 500)





