let running = true

let main = document.querySelector("main")
let snake = document.querySelector("#snake")

let apple = document.createElement("img")
apple.src = "images/apple-icon.png"
main.appendChild(apple)

let head = document.createElement("div")
head.className = "snake"
snake.appendChild(head)

//scoreboard
let scoreboard = document.createElement('div')
scoreboard.className = 'scoreboard'

let score = document.createElement('p')
scoreboard.appendChild(score)

let score_value = document.createTextNode('Score 0')
score.appendChild(score_value)

let counter = 0

document.body.appendChild(scoreboard)

main.focus = true;

let snake_position = {
    x : 0, 
    y : 0
}

let main_coordinates = {
    x_max : 450, 
    x_min : 0,
    y_min : 0,
    y_max : 450
}

console.log(main_coordinates)

const MAIN_WIDTH = +(window.getComputedStyle(main).getPropertyValue('width').match(/\d+/))
const MAIN_HEIGHT = +(window.getComputedStyle(main).getPropertyValue('height').match(/\d+/))

const SNAKE_WIDTH = +(window.getComputedStyle(head).getPropertyValue('width').match(/\d+/))
const SNAKE_HEIGHT = +(window.getComputedStyle(head).getPropertyValue('height').match(/\d+/))

function moveAppleToRandomLocation(elm) {

    let elmWidth = +(window.getComputedStyle(elm).getPropertyValue('width').match(/\d+/))
    let elmHeight = +(window.getComputedStyle(elm).getPropertyValue('height').match(/\d+/))

    let numCols = Math.floor(MAIN_WIDTH / elmWidth)
    let numRows = Math.floor(MAIN_HEIGHT / elmHeight)

    let col = Math.floor(Math.random() * numCols)
    let row = Math.floor(Math.random() * numRows)

    elm.style.left = (col * elmWidth) + "px"
    elm.style.top = (row * elmHeight) + "px"
}

function moveSnakeToRandomLocation(elm) {

    let elmWidth = +(window.getComputedStyle(elm).getPropertyValue('width').match(/\d+/))
    let elmHeight = +(window.getComputedStyle(elm).getPropertyValue('height').match(/\d+/))

    let numCols = Math.floor(MAIN_WIDTH / elmWidth)
    let numRows = Math.floor(MAIN_HEIGHT / elmHeight)

    let col = Math.floor(Math.random() * numCols)
    let row = Math.floor(Math.random() * numRows)

    let pos_col = (col * elmWidth) 
    let pos_row = (row * elmHeight) 

    elm.style.left = (pos_col) + "px"
    elm.style.top = (pos_row) + "px"

    console.log('snake\'s position is %d, %d', pos_col, pos_row) 
    snake_position.x = +(pos_col);
    snake_position.y = +(pos_row);

    if (snake_position.x < 250) {currentDirection = "right"}
    else {currentDirection = "left"}
}

moveAppleToRandomLocation(apple)
moveSnakeToRandomLocation(head)

console.log('snake position is %d, %d', snake_position.x, snake_position.y)

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
    
    console.log(snake_position)
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

    if (currentDirection === "done")
        return
    if (currentDirection === "left") {
        snakeLeft -= snakeWidth;
        snake_position.x -= SNAKE_WIDTH
        console.log(snake_position)
    }
    else if (currentDirection === "up") {
        snakeTop -= snakeHeight;
        snake_position.y -= SNAKE_HEIGHT
        console.log(snake_position)
    }
    else if (currentDirection === "right") {
        snakeLeft += snakeWidth;
        snake_position.x += SNAKE_WIDTH
        console.log(snake_position)
    }
    else if (currentDirection === "down") {
        snakeTop += snakeHeight;
        snake_position.y += SNAKE_HEIGHT
        console.log(snake_position)
    }

    tail.style.left = snakeLeft + "px"
    tail.style.top = snakeTop + "px"


    snake.removeChild(tail)
    snake.appendChild(tail)

    if (snakeCollidesWithApple()) {
        document.dispatchEvent(collision)
    }

    if (snakeIsOutOfBounds()) {
        document.dispatchEvent(out_of_bounds)
    }

    if (snakeCollidesWithItself()) {
        document.dispatchEvent(bit_itself)
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

function snakeIsOutOfBounds () {
    if (snake_position.x > main_coordinates.x_max || snake_position.x < main_coordinates.x_min || 
        snake_position.y < main_coordinates.y_min || snake_position.y > main_coordinates.y_max) {
        return true
    }
    return false
}

function snakeCollidesWithItself () {
  //still working on this 
}

document.body.addEventListener("keydown", changeDirection)

let collision = new CustomEvent("collision", { detail: "snake" })

let out_of_bounds = new CustomEvent("out_of_bounds", { detail: "snake" })

let bit_itself = new CustomEvent("bit_itself", {detail: 'snake'})

function addToScore() {
    counter += 1
    score.firstChild.data =  `Score ${counter}`;
}

document.addEventListener("collision", (e) => {
    moveAppleToRandomLocation(apple)
    lengthenSnake()
    addToScore()
})

document.addEventListener("out_of_bounds", (e) => {
    while (running) {
        console.log(e.detail)

        console.log('you lost')

        let game_over = document.createElement('div')
        game_over.setAttribute('class', 'game-over-div')

        let loser_text = document.createTextNode('Game Over')
        game_over.appendChild(loser_text)
        main.appendChild(game_over)

        apple.setAttribute('class', 'invisible')
        snake.setAttribute('class', 'invisible')

        currentDirection = "done"

        stopRunning()
    }

})

function stopRunning () {
    running = false
    console.log('the game ended')
}

document.addEventListener("bit_itself", (e) => {
    //still working on this 
    out_of_bounds()
})


let timerID = setInterval(moveSnake, 300)

