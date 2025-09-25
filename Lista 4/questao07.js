const prompt = require('prompt-sync')();

let n1= Number(prompt("Digite 3 números para ver qual o maior entre eles: "));
let n2 = Number(prompt());
let n3 = Number(prompt());

if (n1 > n2 && n1 > n3){
    console.log("O primeiro número é o maior: " + n1);

} else if (n2 > n1 && n2 > n3){
    console.log("O segundo número é o maior: " + n2);
}
  
else {
    console.log("O terceiro número é o maior: " + n3);
    
}
