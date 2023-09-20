const {nota,print} = require('./funcoesAuxiliares');

let media = nota();

if(media < 5){
    print("Reprovado");
}else if (media >= 5 && media < 7){
    print("Recuperação");
}else if (media >= 7 && media <= 10){
    print("Aprovado");
}else print("Valor invalido");