const prompt = require('prompt-sync')();

let nota = prompt("Digite sua nota: ");

nota >= 7 ? 
console.log("Aprovado") : console.log("Reprovado");