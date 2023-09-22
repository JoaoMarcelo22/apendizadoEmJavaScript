// First Class Functions
// Higher Order Functions

function func1(){

}  // vai paro o topo do codigo, içada para cima.

const func2 = function(){

}  // não vai sobrer o içamento, ficando na mesma instancia.

const func3 = () => {

}  // Não há o this. 

//Closures - se lembra dos dados onde foram criados.

function soma(x) {
    return (y) => {
        return x + y
    }
}

const somaParcial = soma(10);

//console.log(somaParcial(20));
//console.log(somaParcial(30));
//console.log(somaParcial(40));

// Listas = Arrays

const lista = [1,2,3,4,5,6,7,8,9,10]

lista.forEach((value)=>{
    //console.log(value)
});

let ListaFillter =lista.filter((element)=>{
    return (element % 2 === 0)
});

let listaReduce = lista.reduce((prev,current)=>{
    return prev + current
},0)


const nomes = [{ nome:'jaum'},{nome:'andre'},{nome:'ana'},{nome:'maria'}]

const elementosHtml = nomes
    .filter((e)=> e.nome.startsWith('a'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')

console.log(elementosHtml)

let listaJoin = lista.join(';')
//console.log(listaJoin);

