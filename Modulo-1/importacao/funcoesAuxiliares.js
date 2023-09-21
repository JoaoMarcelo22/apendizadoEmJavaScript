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

// exercicio - 2
numeros2 = [5,3,4,1,10,8];
let i2 = 0;

function numero(){
    const valor2 = numeros2[i2];
    i2++;
    return valor2;
}

// exercicio - 3 
entrada = [2000,250];
let i3 = 0;

function salario(){
    const valor = entrada[i3];
    i3++;
    return valor;
}

module.exports = { gets,print,nota,numero,salario};