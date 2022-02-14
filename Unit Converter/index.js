let input = document.getElementById("input").innerText

// Length 
let length_feet = (parseInt(input) * 3.281).toFixed(3);
let length_meter = (parseInt(input) * 0.3048).toFixed(3);

let length = document.getElementById("length");
length.innerHTML = ""
length.innerHTML = ` ${input} meters = ${length_feet} feet | ${input} feet = ${length_meter} meters `

// Volume 
let gallons = (parseInt(input) * 0.264).toFixed(3);
let liters = (parseInt(input) * 3.7854).toFixed(3);

let volume = document.getElementById("volume");
volume.innerHTML = ""
volume.innerHTML = ` ${input} liters = ${gallons} gallons | ${input} gallons = ${liters} liters `

// Mass 
let pounds = (parseInt(input) * 2.20462).toFixed(3);
let kilos = (parseInt(input) * 0.45359).toFixed(3);

let mass = document.getElementById("mass");
mass.innerHTML = ""
mass.innerHTML = ` ${input} kilos = ${pounds} pounds | ${input} pounds = ${kilos} kilos`


