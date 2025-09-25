const prompt = require('prompt-sync')();

let idade = prompt("Digite sua idade: ");

if (0 < idade && idade <= 12) {
    console.log("Você é uma criança.");
} 
else if (12 < idade && idade <= 17) {
    console.log("Você é um adolescente.");
}
else if (17 < idade && idade <= 59) {
    console.log("Você é uma adulto.");
}
else {
    console.log("Você é um idoso.");
} 
