//Declaraçao de variaveis

var carro = "uno"
const aviao = "boing"
let moto = "bros"

console.log(carro,moto,aviao);

// desafio-01

const precoCombustivel = 5.79;
let gastoMedio = 10;
let distanciaViagem = 100;
var precoTotal = 0;

precoTotal = (distanciaViagem / gastoMedio) * precoCombustivel

console.log(precoTotal.toFixed(2))

// desafio-02

let precoEtanol = 7.00;
let precoGasolina = 5.79;
let typeCombustivel = "oii";
let gastoMedio2 = 10;
let distanciaKM = 100;

if (typeCombustivel == 'gasolina'){
    let precoFinal = (distanciaKM / gastoMedio2) * precoGasolina
    console.log(`Seu gasto foi de precoFinal ${precoFinal}` )
}
else{
    let precoFinal = (distanciaKM / gastoMedio2) * precoEtanol
    console.log(`Seu gasto foi de precoFinal ${precoFinal}`)
}

// desafio-??

const notaUm = 8;
const notaDois = 8;
const notaTres = 8;
const notaFinal = (notaUm+notaDois+notaTres)/3;
if( notaFinal > 7){
    console.log("Passou meu bom")
} else if( notaFinal<=7 && notaFinal>=5){
    console.log("ta de recuperação emmm")
} else console.log("reprovadissimo")

// IMC

const peso = 0;
const altura = 0;
const imc = 0;

imc = peso / Math.pow(altura,2);

if(imc < 18.5){
    console.log("abaixo do peso");
}else if (imc>= 18.5 && imc < 25 ){
    console.log("Peso normal");
}else if ( imc>= 25 && imc < 30){
    console.log("gordao jaum")
}else if ( imc>= 30 && imc < 40){
    console.log("Eita deus, ferrou")
}else console.log("Obesidade em")

