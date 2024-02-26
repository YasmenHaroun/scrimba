const btnMenu = document.getElementById("btn-menu")
const navUl = document.getElementById("nav-ul")
const heroDate = document.getElementById("hero-date")
const gridDate1 = document.getElementById("grid-date1")
const gridDate2 = document.getElementById("grid-date2")
const gridDate3 = document.getElementById("grid-date3")
const gridDate4 = document.getElementById("grid-date4")
const gridDate5 = document.getElementById("grid-date5")
const gridDate6 = document.getElementById("grid-date6")
const btnViewMore = document.getElementById("btn-viewmore")
const footerIndex = document.getElementById("footer-index")

const row2 = document.getElementById("row2")


btnMenu.addEventListener('click',function(){
    navUl.classList.add("open-menu")
    btnMenu.classList.add("hidden")

})

btnViewMore.addEventListener('click', function(){
    console.log("view pressed")
    btnViewMore.style.display = "none"
    row2.style.display = "grid"

})

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const month =  today.toLocaleString('default', { month: 'long' }).toUpperCase();
const yyyy = today.getFullYear();

today = month + " " + dd + "," + yyyy;
console.log(today)
heroDate.innerText = today
gridDate1.innerText = today
gridDate2.innerText = today
gridDate3.innerText = today
gridDate4.innerText = today
gridDate5.innerText = today
gridDate6.innerText = today

const footerContent =`  
    <p class="footer-journal">My Learning Journal</p>
    <p class="copyright">Copyright ©${yyyy}</p>`

footerIndex.innerHTML = footerContent


