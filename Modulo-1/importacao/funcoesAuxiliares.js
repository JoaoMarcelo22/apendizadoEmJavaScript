// importação
numeros = [5,50,10,98,23];
let i = 0;

function gets(){
    const valor = numeros[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto)
}

// exercicio - 1
numeros = [100];

function nota(){
    const valor = numeros[i];
    i++;
    return valor;
}

module.exports = { gets,print,nota};