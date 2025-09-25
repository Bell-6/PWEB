const prompt = require('prompt-sync')();

let tipoCliente = Number(prompt("Digite qual seu tipo de cliente (Estudante, Aposentado, Regular): "));

switch(tipoCliente){
    case "Estudante":
        console.log("Você tem direito a 50% de desconto");
        break;
    
    case "Aposentado":
        console.log("Você tem direito a 30% de desconto");
        break;
    
    case "Regular":
        console.log("Sem direito a desconto");
        break;
}
