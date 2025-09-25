const prompt = require('prompt-sync')();

let ano = Number(prompt("Digite um ano para conferir se é bissexto: "));

if (ano % 4 == 0 || ano % 400 == 0){
    console.log("O ano é bissexto.");
} else {
    console.log("Não é bissexto.")
}
