const prompt = require('prompt-sync')();

let num = Number(prompt("Digite um número e veja se é par ou ímpar: "));

num % 2 == 0 ? console.log("O número é par.") :
console.log("O número é ímpar.");
