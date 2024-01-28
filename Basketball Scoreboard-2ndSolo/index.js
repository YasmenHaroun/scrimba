let incGuest = document.getElementById("scoreGuest");
let incHome = document.getElementById("scoreHome");
let winnerEl = document.getElementById("winner")

let countGuest = 0
let countHome = 0

function increment1Guest() {
    incGuest.innerText = countGuest + 1 
     countGuest += 1
}
function increment1Home() {
    incHome.innerText = countHome + 1 
     countHome += 1
}

function increment2Guest() {
    incGuest.innerText = countGuest + 2 
     countGuest += 2
}
function increment2Home() {
    incHome.innerText = countHome + 2 
     countHome += 2
}

function increment3Guest() {
    incGuest.innerText = countGuest + 3
     countGuest += 3
}
function increment3Home() {
    incHome.innerText = countHome + 3 
     countHome += 3
}


function result() {
   
    let bigger = "Home"
    
    if (countHome < countGuest) {
        bigger = "Guest"
        winnerEl.innerText = "The winner is Guest 🥳🎉"
    }
    else if ( countHome == countGuest ) {
        winnerEl.innerText = "Tied Game 🏆" 
    }
    else 
        winnerEl.innerText = "The winner is Home 🥳🎉"
}

function start() {
    incGuest.innerText = 0;
    incHome.innerText = 0;
    countGuest = 0;
    countHome = 0;
    winnerEl.innerText = ""
}