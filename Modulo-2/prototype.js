/*function Pessoa(nome,idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`eu é = ${this.nome}`)
}
    */
    

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`eu é = ${this.nome}`)
    }
}

new Pessoa('joao',25);

const jurumi = {
    marca : 'honda'
} 
Pessoa.call(jurumi,'jurumi',30)

// sobrescrita

const humano ={
    idade: 18
}

const jaum = {
    nome: 'jaum',
    idade:30, // o mais proximo sobrescreve o mais distante.
    __proto__:humano
}

console.log(jaum.idade)

const pessoa ={
    genero:'masculino'
}

const jaum2 = Object.create(pessoa)
jaum2.nome = 'rjaum'

console.log(jaum2.genero)

