const prompt = require('prompt-sync')();

let temp = prompt("Para a conversão, insira 1 para celsius e 2 para fahrenheit: ");
let graus = prompt("insira quantos graus. ");

if (temp == 1) {
    let converter = (graus*9/5) + 32;
    console.log(`Sua conversão de valor é: ${converter}°F`);
}

if (temp == 2) {
    let converter = (graus-32) * 5/9;
    console.log(`Sua conversão de valor é: ${converter}°C`);
}