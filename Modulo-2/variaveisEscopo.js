

if(true){
    var var1 = 10;
    let var2 = 10;
}

console.log(var1); // dado a arquitetura do Var, ele permite ser içado por todos os escopos.
console.log(var2); // o let se fixa apenas ao bloco, não podendo ser içado externamente, não é necessario atribuir valor.
// const é semelhante ao let, mas não pode ser reatribuido, é necessario atribuir valor.