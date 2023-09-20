const {gets,print} = require('./funcoesAuxiliares');

const numerosSorteados = [];
let maiorNumero = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

for (let i = 0; i < numerosSorteados.length; i++){
    if(numerosSorteados[i]> maiorNumero){
        maiorNumero = numerosSorteados[i];
    }
}

print(maiorNumero);