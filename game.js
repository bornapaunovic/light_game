
// Get the canvas element and its context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Maze layout (1 = wall, 0 = path)
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1,],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
];

const cellSize = 25; // Size of each cell in the maze

// Define the player object
let player = {
    x: 15 * cellSize, // Starting position
    y: 22 * cellSize, // Starting position
    width: cellSize,
    height: cellSize,
    dx: 5,
    dy: 5,
    image: new Image()
};

// Load the player image
player.image.src = 'finish.png';

// Define the finish area
const finishArea = {
    x: 24 * cellSize,
    y: 7 * cellSize,
    width: cellSize,
    height: cellSize,
};


// Function to draw the maze on the canvas
function drawMaze() {
    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            if (maze[row][col] === 1) {
                ctx.fillStyle = '#000'; // Wall color
                ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
            }
        }
    }
}

// Function to draw the finish area on the canvas
function drawFinishArea() {
    ctx.fillStyle = '#0f0'; // Finish area color
    ctx.fillRect(finishArea.x, finishArea.y, finishArea.width, finishArea.height);
}

// Function to draw the player on the canvas
function drawPlayer() {
    ctx.drawImage(player.image, player.x, player.y, player.width, player.height);
}

// Function to clear the canvas
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Variables to track which keys are pressed
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

// Event listeners for key presses
document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

// Functions to handle key presses
function keyDownHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = true;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = true;
    } else if (e.key === 'Up' || e.key === 'ArrowUp') {
        upPressed = true;
    } else if (e.key === 'Down' || e.key === 'ArrowDown') {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = false;
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = false;
    } else if (e.key === 'Up' || e.key === 'ArrowUp') {
        upPressed = false;
    } else if (e.key === 'Down' || e.key === 'ArrowDown') {
        downPressed = false;
    }
}

// Function to check for collisions with walls
function collisionDetection(newX, newY) {
    const topLeft = maze[Math.floor(newY / cellSize)][Math.floor(newX / cellSize)];
    const topRight = maze[Math.floor(newY / cellSize)][Math.floor((newX + player.width) / cellSize)];
    const bottomLeft = maze[Math.floor((newY + player.height) / cellSize)][Math.floor(newX / cellSize)];
    const bottomRight = maze[Math.floor((newY + player.height) / cellSize)][Math.floor((newX + player.width) / cellSize)];

    return topLeft === 1 || topRight === 1 || bottomLeft === 1 || bottomRight === 1;
}

// Function to check if the player has reached the finish area
function checkFinish() {
    const playerLeft = player.x;
    const playerRight = player.x + player.width;
    const playerTop = player.y;
    const playerBottom = player.y + player.height;

    const finishLeft = finishArea.x;
    const finishRight = finishArea.x + finishArea.width;
    const finishTop = finishArea.y;
    const finishBottom = finishArea.y + finishArea.height;

    if (playerRight > finishLeft && playerLeft < finishRight && playerBottom > finishTop && playerTop < finishBottom) {
        return true;

    }
    return false;
}


function changePageBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }

// Update function to redraw the player, maze, and handle movement
function update() {
    clear();
    drawMaze();
    drawFinishArea();
    drawPlayer();

    // Calculate potential new position
    let newX = player.x;
    let newY = player.y;

    if (rightPressed) {
        newX += player.dx;
    }
    if (leftPressed) {
        newX -= player.dx;
    }
    if (upPressed) {
        newY -= player.dy;
    }
    if (downPressed) {
        newY += player.dy;
    }

    // Check for collisions before updating player position
    if (!collisionDetection(newX, player.y)) {
        player.x = newX;
    }
    if (!collisionDetection(player.x, newY)) {
        player.y = newY;
    }

    // Check if player has reached the finish area
    if (checkFinish()) {
        alert('DO YOU WISH TO TURN ON THE LIGHTS?');
        changePageBackgroundColor('white');
        // Reset player position or move to the next level
        player.x = 15 * cellSize;
        player.y = 22 * cellSize;
    }

    // Request to do this again ASAP
    requestAnimationFrame(update);
}

// Start the game loop
update();
