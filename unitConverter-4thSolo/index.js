const btnEl = document.getElementById("btn-convert")
const inputEl = document.getElementById("inputNum")

let lengthConvert = document.getElementById("length-Convert")
let volumeConvert = document.getElementById("volume-Convert")
let massConvert = document.getElementById("mass-Convert")



btnEl.addEventListener("click", function() {
    const inputNumber = Number(inputEl.value)
    console.log(inputEl.value)

    const meterToFeet = inputNumber * 3.2808
    console.log("meterToFeet" + meterToFeet)
    const literToGallon = inputNumber * 0.2642
    const kiloToPound = inputNumber * 2.2046
    const feetToMeter = inputNumber / 3.2808
    const gallonToLiter = inputNumber / 0.2642
    const poundToKilo = inputNumber / 2.2046
    
    
    lengthConvert.innerHTML = `${inputNumber}meters = ${meterToFeet}feet |${inputNumber}feet = ${feetToMeter}meters`
    volumeConvert.textContent = `${inputNumber}liters = ${literToGallon}gallons |${inputNumber}gallons =${gallonToLiter}liters`
    massConvert.textContent = `${inputNumber}kilos = ${kiloToPound}pounds |${inputNumber}pounds = ${poundToKilo}kilos`
})