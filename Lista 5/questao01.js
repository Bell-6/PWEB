const real = 100;

const taxas = {
    dolar: 4.2,
    euro: 5.3
}

function converter (real){
    console.log("---- Conversão real ----");
    return `Dolar:  ${(real/taxas.dolar).toFixed(2)}$\nEuro: ${(real/taxas.euro).toFixed(2)}€`;
}

console.log(converter(real));