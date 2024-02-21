import { menuArray } from './data.js'

const menuSection = document.getElementById("menu-section")
const totalPrice = document.getElementById("total-price")
const order = document.getElementById("order")
const orderDetails = document.getElementById("order-details")
const orderPrice = document.getElementById("order-price")
const popUp = document.getElementById("pop-up")
const thanksMsg = document.getElementById("thanks-msg")
const userName = document.getElementById("user-name")
const user = document.getElementById("user")

let orderArray = []
let toRemoveid = 10
let orderDetailsHTML = ''
let total = 0


const selectedItem = document.addEventListener('click', function(e){
    if (e.target.className === "remove-btn") {
        toRemoveid = e.target.dataset.itemid
        removeItem(orderArray)  
    }
    else if (e.target.className ===  "add-btn") {
            order.classList.remove("hidden")
            orderArray.push(Number(e.target.id))
            orderDetailed(orderArray)
    }
    else if (e.target.id === "pay-btn") {
        user.innerText = userName.value
        thanksMsg.classList.remove("hidden")
        popUp.classList.add("hidden")
        order.classList.add("hidden")
    }

    else if (e.target.id === "complete-btn") {
        popUp.classList.remove("hidden")
        removeItem(orderArray)
    }
})

function renderMenu(){
    menuArray.map(readArry)
    function readArry(item){
        menuSection.innerHTML += `
        <section class="menu-item">
        <div class="img-name">
            <img
            class="item-image"
            src=${item.image}
            alt="${item.name} photo"
            />
            <div class="item">
            <h3>${item.name}</h3>
            <h4>${item.ingredients}</h4>
            <h5>${item.price}</h5>
            </div>
        </div>
            <button class="add-btn" id="${item.id}">+</button>
        </section> `
    }
}

function orderDetailed(orderArray){
    orderDetailsHTML = ''
    total = 0
    orderArray.map(renderArray)
    function renderArray(id){
        let item = menuArray.filter(loop)
        function loop(item){
            return item.id == id 
        } 
        total += item[0].price
        orderDetailsHTML += `          
        <div class="flex-display">
            <div>
                <span class="order-style">${item[0].name}</span>
                <button class="remove-btn" data-itemid="${id}">remove</button>
            </div>
            <span class="order-price">${item[0].price}</span> 
        </div>`
    }
    orderDetails.innerHTML = orderDetailsHTML
    orderPrice.innerHTML = total
}

function removeItem(orderArray){
    if (orderArray.length != 0) {
        for (let i = 0; i < orderArray.length; i++) { 
            if (orderArray[i] =  toRemoveid) {
                orderArray.splice(i,1)
                break
            }
        }
    }
    orderDetailed(orderArray)
}



renderMenu() 
