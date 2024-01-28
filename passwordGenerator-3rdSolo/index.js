const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")


const lengthEl = document.getElementById("length-el")
const length1 = lengthEl.value


function randomNumber() {
    return (Math.floor(Math.random() * characters.length))
}

function generatePassword() {
    for (let j = 0 ; j < 2; j++) {
        let password = characters[randomNumber()]
        for (let i = 1; i < 15; i++) {
            password += characters[randomNumber()]
        }
        
        if (j===0) {
            password1El.textContent = password
        } else {
           password2El.textContent = password
        }
    }
}
