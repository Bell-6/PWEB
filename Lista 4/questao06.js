const prompt = require('prompt-sync')();

const nomecorret = "Maria";
const senhacorret = "1234";

let nome = prompt("Digite seu nome: ");
let senha = prompt("Digite sua senha: ");

if (nome == nomecorret && senha == senhacorret){
console.log("Acesso permitido"); 
  
}
else {
console.log("Acesso negado");
}

