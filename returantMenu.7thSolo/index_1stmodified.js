import { menuArray } from './data.js'

const menuSection = document.getElementById("menu-section")
const totalPrice = document.getElementById("total-price")
const order = document.getElementById("order")
const orderDetails = document.getElementById("order-details")
const orderPrice = document.getElementById("order-price")
const popUp = document.getElementById("pop-up")
const thanksMsg = document.getElementById("thanks-msg")

let total = 0
let orderArray = []
const selectedItem = document.addEventListener('click', function(e){
    if (e.target.id <= 2 || e.target.id >= 0) {
        console.log("+ clicked horay")
        order.classList.remove("hidden")
        orderDetailed(e.target.id)
        orderArray.push(Number(e.target.id))
        console.log(orderArray)
        total += menuArray[e.target.id].price
        orderPrice.innerHTML = total
    }
    else if (e.target.id === "pay-btn") {
        console.log("pay pressed")
        thanksMsg.classList.remove("hidden")
        popUp.classList.add("hidden")
        order.classList.add("hidden")
    }

    else if (e.target.id === "complete-btn") {
        popUp.classList.remove("hidden")
        removeItem()
        console.log("complete clicked")
    }

    else if (e.target.className === "remove-btn") {
        console.log("remove btn clicked") 
        removeItem()  
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

function orderDetailed(id){
    let item = menuArray.filter(loop)
    function loop(item){
        return item.id == id 
    }

    orderDetails.innerHTML +=`          
    <div class="flex-display" id="${item[0].name}">
        <div>
            <span class="order-style">${item[0].name}</span>
            <button class="remove-btn">remove</button>
        </div>
        <span class="order-price">${item[0].price}</span> 
    </div>`
    
}

function removeItem(){
    
}


renderMenu() 
