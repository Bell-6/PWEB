const prompt = require('prompt-sync')();


let n1 = parseFloat(prompt("Digite um primeiro número e um segundo número: "));
let n2 = parseFloat(prompt());

let oper= prompt("Digite uma das 4 operações (Soma, Subtração, Multiplicação e Divisão): ");

switch(oper){
    case "Soma":
        console.log(n1 + n2);
        break;

    case "Subtração":
        console.log(n1 - n2);
        break;

    case "Multiplicação":
        console.log(n1 * n2);
        break;

    case "Divisão":
        console.log(n1 / n2);
        break;

    default:
        console.log("Insira uma operação que seja válida");
}