// exercicio - 1
const {nota,print,numero,salario} = require('./funcoesAuxiliares');

let media = nota();

if(media < 5){
    //print("Reprovado");
}else if (media >= 5 && media < 7){
    //print("Recuperação");
}else if (media >= 7 && media <= 10){
    //print("Aprovado");
}else print("Valor invalido");

// exercicio - 2

const numeros = numero();

let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < numeros; i++) {
    const numeros2 = numero();
    if(numeros2 % 2 === 0 && numeros2 > maiorPar){
        maiorPar = numeros2
    } else if (menorImpar === null){
        menorImpar = numeros2
    } else if (numeros2 < menorImpar){
        menorImpar = numeros2
    }
}
//print(`Maior Par = ${maiorPar}, Menor Impar = ${menorImpar}`);


// exercicio - 2

const salarioBruto = salario();
const salarioBeneficios = salario();

function impostos(valor){
    let impostos = 0;
    if(valor > 0 && valor < 1100){
        impostos = 0.05;
    } else if (valor >= 1100 && valor < 2500){
        impostos = 0.10;
    } else if (valor >= 2500){
        impostos = 0.15;
    }
    return impostos;
}
function valorTotal(valor,beneficio){
    const salarioTotal = (valor - valor * impostos(valor)) + beneficio;
    return salarioTotal;

}
print(`O total a ser recebido é = ${valorTotal(salarioBruto,salarioBeneficios)}`)
