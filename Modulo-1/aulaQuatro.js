// array

const alunos = ['joao','jose','maria'];

//console.log(alunos[0]);

alunos.push('Renan'); // ultima posição 
alunos.pop() // remove ultimo elemento
alunos.shift() // remove primeiro elemento

alunos[4] = 'vini';

// repeticao for

const notas =[];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let notaFinal = 0;

for (let index = 0; index < notas.length; index++) {
    notaFinal += notas[index]
}
const media = notaFinal / notas.length

const nome = 'joao marcelo da silva ferreira'

for (let i = 0; i < nome.length; i++) {
    //console.log(nome[i]);
}
//console.log(media)

// Tabuada

let numero = 7;

for (let i = 0; i < 11; i++) {
    valor = i * numero
    //console.log(`${numero} X ${i} é igual a = ${valor}`)
}

//  Par ou impar

valores = [5,3,2,6,8,11,12];

for (let i = 0; i < valores.length; i++) {
    if(valores[i]%2){
    } else console.log(` o valor ${valores[i]} é um numero par`)
}