import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://we-are-the-champions-410a6-default-rtdb.asia-southeast1.firebasedatabase.app/"}

const app = initializeApp(appSettings) // our fire database url
const database = getDatabase(app) // give it app of our databas
const endrosements = ref(database, "Endrosements")

const inputTextEl = document.getElementById("input-text")
const btnPublishEl = document.getElementById("btn-publish")
const endrosementsList = document.getElementById("endrosements-list")
const fromEl = document.getElementById("from-el")
const toEl = document.getElementById("to-el")


btnPublishEl.addEventListener("click", function(){
    endrosementsList.textContent = ""
    push(endrosements, inputTextEl.value)
    //appendToList(inputTextEl.value, toEl.value, fromEl.value)
    clearInputText()
}) 

onValue(endrosements, function(snapshot){
    if (snapshot.exists()) {
        let endrosementsArray = Object.values(snapshot.val())
        clearEndrosementsList()
        for (let i = 0; i < endrosementsArray.length; i++) {
            let currentItem = endrosementsArray[i]           
            appendToList(currentItem)
        }    
    } else {
        let newEl = document.createElement("section")
        newEl.innerHTML = "No items here... yet"
        endrosementsList.append(newEl)
    }
    
})

function appendToList(item, to, from){
    let newEl = document.createElement("section")

    newEl.innerHTML = `
    <h4 id="to-el">To ${to}</h4>
    ${item}
    <h4 id="from-el">From ${from}</h4>
    `
    clearInputText()

    endrosementsList.append(newEl)
}

function clearInputText() {
    inputTextEl.value = ""
    fromEl.value = ""
    toEl.value = ""
    console.log(inputTextEl.value)
}

function clearEndrosementsList() {
    endrosementsList.innerHTML = ``
}