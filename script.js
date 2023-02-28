const word = document.getElementById("word");
const text = document.getElementById("text");
const endgameEl = document.getElementById("gamefinished");
const startgameel = document.getElementById("fristpagedisp");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");
const loadpage = document.getElementById("load");



// List of words for game
const words = [
    "a",
  "ability",
  "able",
  "about",
  "above",
  "accept",
  "according",
  "account",
  "across",
  "act",
  "action",
  "activity",
  "actually",
  "add",
  "address",
  "administration",
  "admit",
  "adult",
  "affect",
  "after",
  "again",
  "against",
  "age",
  "agency",
  "agent",
  "ago",
  "agree",
  "agreement",
  "ahead",
  "air",
  "all",
  "allow",
  "almost",
  "alone",
  "along",
  "already",
  "also",
  "although",
  "always",
  "American",
  "among",
  "amount",
  "analysis",
  "and",
  "animal",
  "another",
  "answer",
  "any",
  "anyone",
  "anything",
  "appear",
  "apply",
  "approach",
  "area",
  "argue",
  "arm",
  "around",
  "arrive",
  "art",
  "article",
  "artist",
  "as",
  "ask",
  "assume",
  "at",
  "attack",
  "attention",
  "attorney",
  "audience",
  "author",
  "authority",
  "available",
  "avoid",
  "away",
  "baby",
  "back",
  "bad",
  "bag",
  "ball",
  "bank",
  "bar",
  "base",
  "be",
  "beat",
  "beautiful",
  "because",
  "become",
  "bed",
  "before",
  "begin",
  "behavior",
  "behind",
  "believe",
  "benefit",
  "best",
  "better",
  "between",
  "beyond",
  "big",
  "bill",
  "billion",
  "bit",
  "black",
  "blood",
  "blue",
  "board",
  "body",
  "book",
  "born",
  "both",
  "box",
  "boy",
  "break",
  "bring",
  "brother",
  "budget",
  "build",
  "building",
  "business",
  "but",
  "buy",
  "by",
  "call",
  "camera",
  "campaign",
  "can",
  "cancer",
  "candidate",
  "capital",
  "car",
  "card",
  "care",
  "career",
  "carry",
  "case",
  "catch",
  "cause",
  "cell",
  "center",
  "central",
  "century",
  "certain",
  "certainly",
  "chair",
  "challenge",
  "chance",
  "change",
  "character",
  "charge",
  "check",
  "child",
  "choice",
  "choose",
  "church",
  "citizen",
  "city",
  "civil",
  "claim",
  "class",
  "clear",
  "clearly",
  "close",
  "coach",
  "cold",
  "collection",
  "college",
  "color",
  "come",
  "commercial",
  "common",
  "community",
  "company",
  "compare",
  "computer",
  "concern",
  "condition",
  "conference",
  "Congress",
  "consider",
  "consumer",
  "contain",
  "continue",
  "control",
  "cost",
  "could",
  "country",
  "couple",
  "course",
  "court",
  "cover",
  "create",
  "crime",
  "cultural",
  "culture",
  "cup",
  "current",
  "customer",
  "cut",
  "dark",
  "data",
  "daughter",
  "day",
  "dead",
  "deal",
  "death",
  "debate",
  "decade",
  "decide",
  "decision",
  "deep",
  "defense",
  "degree",
  "Democrat",
  "democratic",
  "describe",
  "design",
  "despite",
  "detail",
  "determine",
  "develop",
  "development",
  "die",
  "difference",
  "different",
  "difficult",
  "dinner",
  "direction",
  "director",
  "discover",
  "discuss",
  "discussion",
  "disease",
  "do",
  "doctor",
  "dog",
  "door",
  "down",
  "draw",
  "dream",
  "drive",
  "drop",
  "drug",
  "during",
  "each",
  "early",
  "east",
  "easy",
  "eat",
  "economic",
  "economy",
  "edge",
  "education",
  "effect",
  "effort",
  "eight",
  "either",
  "election",
  "else",
  "employee",
  "end",
  "energy",
  "enjoy",
  "enough",
  "enter",
  "entire",
  "environment",
  "environmental",
  "especially",
  "establish",
  "even",
  "evening",
  "event",
  "ever",
  "every",
  "everybody",
  "everyone",
  "everything",
  "evidence",
  "exactly",
  "example",
  "executive",
  "exist",
  "expect",
  "experience",
  "expert",
  "explain",
  "eye",
  "face",
  "fact",
  "factor",
  "fail",
  "fall",
  "family",
  "far",
  "fast",
  "father",
  "fear",
  "federal",
  "feel",
  "feeling",
  "few",
  "field",
  "fight",
  "figure",
  "fill",
  "film",
  "final",
  "finally",
  "financial",
  "find",
  "fine",
  "finger",
  "finish",
  "fire",
  "firm",
  "first",
  "fish",
  "five",
  "floor",
  "fly",
  "focus",
  "follow",
  "food",
  "foot",
  "for",
  "force",
  "foreign",
  "forget",
  "form",
  "former",
  "forward",
  "four",
  "free",
  "friend",
  "from",
  "front",
  "full",
  "fund",
  "future",
  "game",
  "garden",
  "gas",
  "general",
  "generation",
  "get",
  "girl",
  "give",
  "glass",
  "go",
  "goal",
  "good",
  "government",
  "great",
  "green",
  "ground",
  "group",
  "grow",
  "growth",
  "guess",
  "gun",
  "guy",
  "hair",
  "half",
  "hand",
  "hang",
  "happen",
  "happy",
  "hard",
  "have",
  "he",
  "head",
  "health",
  "hear",
  "heart",
  "heat",
  "heavy",
  "help",
  "her",
  "here",
  "herself",
  "high",
  "him",
  "himself",
  "his",
  "history",
  "hit",
  "hold",
  "home",
  "hope",
  "hospital",
  "hot",
  "hotel",
  "hour",
  "house",
  "how",
  "however",
  "huge",
  "human",
  "hundred",
  "husband",
  "I",
  "idea",
  "identify",
  "if",
  "image",
  "imagine",
  "impact",
  "important",
  "improve",
  "in",
  "include",
  "including",
  "increase",
  "indeed",
  "indicate",
  "individual",
  "industry",
  "information",
  "inside",
  "instead",
  "institution",
  "interest",
  "interesting",
  "international",
  "interview",
  "into",
  "investment",
  "involve",
  "issue",
  "it",
  "item",
  "its",
  "itself",
  "job",
  "join",
  "just",
  "keep",
  "key",
  "kid",
  "kill",
  "kind",
  "kitchen",
  "know",
  "knowledge",
  "land",
  "language",
  "large",
  "last",
  "late",
  "later",
  "laugh",
  "law",
  "lawyer",
  "lay",
  "lead",
  "leader",
  "learn",
  "least",
  "leave",
  "left",
  "leg",
  "legal",
  "less",
  "let",
  "letter",
  "level",
  "lie",
  "life",
  "light",
  "like",
  "likely",
  "line",
  "list",
  "listen",
  "little",
  "live",
  "local",
  "long",
  "look",
  "lose",
  "loss",
  "lot",
  "love",
  "low",
  "machine",
  "magazine",
  "main",
  "maintain",
  "major",
  "majority",
  "make",
  "man",
  "manage",
  "management",
  "manager",
  "many",
  "market",
  "marriage",
  "material",
  "matter",
  "may",
  "maybe",
  "me",
  "mean",
  "measure",
  "media",
  "medical",
  "meet",
  "meeting",
  "member",
  "memory",
  "mention",
  "message",
  "method",
  "middle",
  "might",
  "military",
  "million",
  "mind",
  "minute",
  "miss",
  "mission",
  "model",
  "modern",
  "moment",
  "money",
  "month",
  "more",
  "morning",
  "most",
  "mother",
  "mouth",
  "move",
  "movement",
  "movie",
  "Mr",
  "Mrs",
  "much",
  "music",
  "must",
  "my",
  "myself",
  "name",
  "nation",
  "national",
  "natural",
  "nature",
  "near",
  "nearly",
  "necessary",
  "need",
  "network",
  "never",
  "new",
  "news",
  "newspaper",
  "next",
  "nice",
  "night",
  "no",
  "none",
  "nor",
  "north",
  "not",
  "note",
  "nothing",
  "notice",
  "now",
  "n't",
  "number",
  "occur",
  "of",
  "off",
  "offer",
  "office",
  "officer",
  "official",
  "often",
  "oh",
  "oil",
  "ok",
  "old",
  "on",
  "once",
  "one",
  "only",
  "onto",
  "open",
  "operation",
  "opportunity",
  "option",
  "or",
  "order",
  "organization",
  "other",
  "others",
  "our",
  "out",
  "outside",
  "over",
  "own",
  "owner",
  "page",
  "pain",
  "painting",
  "paper",
  "parent",
  "part",
  "participant",
  "particular",
  "particularly",
  "partner",
  "party",
  "pass",
  "past",
  "patient",
  "pattern",
  "pay",
  "peace",
  "people",
  "per",
  "perform",
  "performance",
  "perhaps",
  "period",
  "person",
  "personal",
  "phone",
  "physical",
  "pick",
  "picture",
  "piece",
  "place",
  "plan",
  "plant",
  "play",
  "player",
  "PM",
  "point",
  "police",
  "policy",
  "political",
  "politics",
  "poor",
  "popular",
  "population",
  "position",
  "positive",
  "possible",
  "power",
  "practice",
  "prepare",
  "present",
  "president",
  "pressure",
  "pretty",
  "prevent",
  "price",
  "private",
  "probably",
  "problem",
  "process",
  "produce",
  "product",
  "production",
  "professional",
  "professor",
  "program",
  "project",
  "property",
  "protect",
  "prove",
  "provide",
  "public",
  "pull",
  "purpose",
  "push",
  "put",
  "quality",
  "question",
  "quickly",
  "quite",
  "race",
  "radio",
  "raise",
  "range",
  "rate",
  "rather",
  "reach",
  "read",
  "ready",
  "real",
  "reality",
  "realize",
  "really",
  "reason",
  "receive",
  "recent",
  "recently",
  "recognize",
  "record",
  "red",
  "reduce",
  "reflect",
  "region",
  "relate",
  "relationship",
  "religious",
  "remain",
  "remember",
  "remove",
  "report",
  "represent",
  "Republican",
  "require",
  "research",
  "resource",
  "respond",
  "response",
  "responsibility",
  "rest",
  "result",
  "return",
  "reveal",
  "rich",
  "right",
  "rise",
  "risk",
  "road",
  "rock",
  "role",
  "room",
  "rule",
  "run",
  "safe",
  "same",
  "save",
  "say",
  "scene",
  "school",
  "science",
  "scientist",
  "score",
  "sea",
  "season",
  "seat",
  "second",
  "section",
  "security",
  "see",
  "seek",
  "seem",
  "sell",
  "send",
  "senior",
  "sense",
  "series",
  "serious",
  "serve",
  "service",
  "set",
  "seven",
  "several",
  "sex",
  "sexual",
  "shake",
  "share",
  "she",
  "shoot",
  "short",
  "shot",
  "should",
  "shoulder",
  "show",
  "side",
  "sign",
  "significant",
  "similar",
  "simple",
  "simply",
  "since",
  "sing",
  "single",
  "sister",
  "sit",
  "site",
  "situation",
  "six",
  "size",
  "skill",
  "skin",
  "small",
  "smile",
  "so",
  "social",
  "society",
  "soldier",
  "some",
  "somebody",
  "someone",
  "something",
  "sometimes",
  "son",
  "song",
  "soon",
  "sort",
  "sound",
  "source",
  "south",
  "southern",
  "space",
  "speak",
  "special",
  "specific",
  "speech",
  "spend",
  "sport",
  "spring",
  "staff",
  "stage",
  "stand",
  "standard",
  "star",
  "start",
  "state",
  "statement",
  "station",
  "stay",
  "step",
  "still",
  "stock",
  "stop",
  "store",
  "story",
  "strategy",
  "street",
  "strong",
  "structure",
  "student",
  "study",
  "stuff",
  "style",
  "subject",
  "success",
  "successful",
  "such",
  "suddenly",
  "suffer",
  "suggest",
  "summer",
  "support",
  "sure",
  "surface",
  "system",
  "table",
  "take",
  "talk",
  "task",
  "tax",
  "teach",
  "teacher",
  "team",
  "technology",
  "television",
  "tell",
  "ten",
  "tend",
  "term",
  "test",
  "than",
  "thank",
  "that",
  "the",
  "their",
  "them",
  "themselves",
  "then",
  "theory",
  "there",
  "these",
  "they",
  "thing",
  "think",
  "third",
  "this",
  "those",
  "though",
  "thought",
  "thousand",
  "threat",
  "three",
  "through",
  "throughout",
  "throw",
  "thus",
  "time",
  "to",
  "today",
  "together",
  "tonight",
  "too",
  "top",
  "total",
  "tough",
  "toward",
  "town",
  "trade",
  "traditional",
  "training",
  "travel",
  "treat",
  "treatment",
  "tree",
  "trial",
  "trip",
  "trouble",
  "true",
  "truth",
  "try",
  "turn",
  "TV",
  "two",
  "type",
  "under",
  "understand",
  "unit",
  "until",
  "up",
  "upon",
  "us",
  "use",
  "usually",
  "value",
  "various",
  "very",
  "victim",
  "view",
  "violence",
  "visit",
  "voice",
  "vote",
  "wait",
  "walk",
  "wall",
  "want",
  "war",
  "watch",
  "water",
  "way",
  "we",
  "weapon",
  "wear",
  "week",
  "weight",
  "well",
  "west",
  "western",
  "what",
  "whatever",
  "when",
  "where",
  "whether",
  "which",
  "while",
  "white",
  "who",
  "whole",
  "whom",
  "whose",
  "why",
  "wide",
  "wife",
  "will",
  "win",
  "wind",
  "window",
  "wish",
  "with",
  "within",
  "without",
  "woman",
  "wonder",
  "word",
  "work",
  "worker",
  "world",
  "worry",
  "would",
  "write",
  "writer",
  "wrong",
  "yard",
  "yeah",
  "year",
  "yes",
  "yet",
  "you",
  "young",
  "your",
  "yourself"
    ];



function loadgame(){
  var loadtm = 0;
  var intervallodatm = setInterval(ldtime, 400);
  startgameel.style.display = "flex";
  myGameArea.start();
  var wsh = window.innerWidth - 220;
  var wsc = window.innerWidth - 175;    
  
  enemypiece = new component(560, 150, "asset/boat.png", 10, 200, "image");
  myGamePiece = new component(560, 150, "asset/boat2.png", 10, 320,"image");
  myScore = new component("25px", "Consolas", "#e0c824", wsc, 55, "text");
  distance = new component("25px", "Consolas", "#e0c824", 50, 55, "text");
  mshape = new component(300, 100, "asset/tmbg.png", -20, -10,"image");
  sshape = new component(200, 100, "asset/scbg.png", wsh, -10,"image");
  batasarena = new component(10, 500, "white", innerWidth, 0);
  myBackground = new component(2933, 500, "asset/bg.jpg", 0, 0, "background");

  function ldtime() {
    if (loadtm >= 10) {
      loadpage.style.display = "none";
      clearInterval(intervallodatm);
    } else {
      loadtm++;
    }
  }
  

}



// Init word
let randomWord;

// Init score
let score = 0;

// Init distance
let distancem = 150;

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
const timeInterval = setInterval(updateDistance, 1000);
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
}

// Update time
function updateDistance() {
  distancem--;

  if (distancem === 0) {
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
    if (myGamePiece.x > enemypiece.x) {
        document.getElementById("finished").innerHTML="You Win";
    }else{
        document.getElementById("finished").innerHTML="You Lose";
    }
  document.getElementById("scre").innerHTML=score;
  endgameEl.style.display = "flex";
  myMusic.stop();
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
        posx += 2;
      
    } else if (difficulty === "medium") {
        diffenmy = 500;
        posx += 3;
      
    } else {
        diffenmy = 700;
        posx += 4;
    }

    updateDistance();
  }
});



// Settings select
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});


var myMusic;
var myGamePiece;
var enemypiece;
var sshape;
var mshape;
var myScore;
var distance;
var batasarena;



myMusic = new sound("asset/bgmusic.mp3");

function startGame() {
    startgameel.style.display = "none";
    settings.classList.toggle("hide");
    // Focus on text on start
    text.focus();

    myMusic.play();
    
    countingdown();
}

var myGameArea = {
    canvas : document.getElementById('canvas'),
    start : function() {
        this.canvas.width = window.innerWidth - 10;
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
        }else if (type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
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
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }   
}


function updateGameArea() {
    myGameArea.clear();
    if (posx >= 1) {
      myGamePiece.x += 1;
      if (myGamePiece.crashWith(batasarena)) {
        myGamePiece.x--;
        setInterval(myGamePiece.x, 100);
      }
    }else if (myGamePiece.x >= 10) {
      myGamePiece.x--;
      setInterval(myGamePiece.x, 1000);
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
    sshape.update();
    mshape.update();
    myScore.text="Score: " + score;
    myScore.update();
    distance.text="Finish: " + distancem;
    distance.update();
    batasarena.update();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}