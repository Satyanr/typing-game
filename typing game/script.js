const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("gamefinished");
const startgameel = document.getElementById("end-game-container");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// List of words for game
const words = [
  "wonderful",
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];

function fristpage(){
    startgameel.innerHTML = `
    <h1>Game over</h1>
    <p>Your score is ${score}</p>
    <button onclick="startGame()">Start Game</button>
  `;

  startgameel.style.display = "flex";

}



// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 100;

var posx = 0;

var diffenmy;

// Set difficulty to value in ls or medium
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

// Set difficulty select value
difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

// Start counting down
function countingdown(){
const timeInterval = setInterval(updateTime, 1000);
const posxinterval = setInterval(updateposx, 400);
}

// Generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}


// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + "m";

  if (time === 0) {
    clearInterval(countingdown.timeInterval);
    // end game
    gameOver();
  }
}

//updateposx
function updateposx(){
  if (posx > 0) {
    posx--;
  }
  
}

// Game over, show end screen
function gameOver() {
  document.getElementById("scre").innerHTML=score;
  endgameEl.style.display = "flex";
}

addWordToDOM();

// Event listeners

// Typing
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = "";

    if (difficulty === "hard") {
      diffenmy = 100;
      if (myGamePiece.x < 900) {
        posx += 2;
      }
      
    } else if (difficulty === "medium") {
      diffenmy = 500;
      if (myGamePiece.x < 900) {
        posx += 3;
      }
      
    } else {
      diffenmy = 800;
      if (myGamePiece.x < 900) {
        posx += 4;
      }
    }

    updateTime();
  }
});



// Settings select
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});


var myGamePiece;
var enemypiece;

function startGame() {
    startgameel.style.display = "none";
    settings.classList.toggle("hide");
    // Focus on text on start
    text.focus();
    enemypiece = new component2(30, 30, "blue", 10, 300);
    myGamePiece = new component(30, 30, "red", 10, 400);
    myBackground = new component(1000, 500, "bg.jpg", 0, 0, "background");
    myGameArea.start();
    countingdown();
}

var myGameArea = {
    canvas : document.getElementById('canvas'),
    start : function() {
        this.canvas.width = 1000;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function(){
        ctx = myGameArea.context;
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        if (type == "background") {
            ctx.drawImage(this.image, 
                this.x + this.width, 
                this.y,
                this.width, this.height);
        }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }    
}

function component2(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;    
    this.update = function(){
        ctx = myGameArea.context;
        if (type == "image" || type == "background") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        if (type == "background") {
            ctx.drawImage(this.image, 
                this.x + this.width, 
                this.y,
                this.width, this.height);
        }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }
    }    
}

function updateGameArea() {
    myGameArea.clear();
    if (posx >= 1) {
      myGamePiece.x += 1;
    }else if (myGamePiece.x >= 10) {
      myGamePiece.x--;
      setInterval(this, 1000)
    }

    if (enemypiece.x < diffenmy) {
      enemypiece.x += 1;
    }
    
    myBackground.speedX = -1;
    myBackground.newPos();    
    myBackground.update();
    enemypiece.newPos();
    enemypiece.update();
    myGamePiece.newPos();    
    myGamePiece.update();
}