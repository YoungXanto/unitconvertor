/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

document.getElementById("generate-btn").addEventListener("click", function(){
    let inputEl = document.getElementById("input-el").value
    
    let converNumMeterFeet = [inputEl * 3.281, inputEl / 3.281]
    let converNumLitersGallons = [inputEl * 0.264, inputEl / 0.264]
    let converNumKgLbs = [inputEl * 2.204, inputEl / 2.204]
    
    document.getElementById("par-el-one").innerHTML = `${inputEl} meters = ${converNumMeterFeet[0].toFixed(3)} feet | ${inputEl} feet = ${converNumMeterFeet[1].toFixed(3)} meters`
    
    document.getElementById("par-el-two").innerHTML = `${inputEl} liters = ${converNumLitersGallons[0].toFixed(3)} gallons | ${inputEl} gallons = ${converNumLitersGallons[1].toFixed(3)} liters`
    
    document.getElementById("par-el-three").innerHTML = `${inputEl} kilos = ${converNumKgLbs[0].toFixed(3)} pounds | ${inputEl} kilos = ${converNumKgLbs[1].toFixed(3)} pounds`
})