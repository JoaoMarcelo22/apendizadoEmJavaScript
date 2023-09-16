// objeto

const usuario = { 
    nome: "jurandi",
    idade: 32,

    descreve: function () {
        //console.log(`nome é ${this.nome}, idade é ${this.idade}`);
    } 
};

usuario.descreve();

usuario['nome'] = 'teste';
usuario.nome = 'teste';

// Classe

class pessoa {
    nome;
    idade;

    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descreve() {
        //console.log(`nome é ${this.nome}, idade é ${this.idade}`);
    } 
};

const jaum = new pessoa('jaum',25);

//console.log(jaum)
//jaum.descreve();

// exercicio

    function compararPessoas(p1,p2) {
        if(p1.idade > p2.idade){
            console.log(`${p1.nome} é mais velho que ${p2.nome}`)
        } else if (p1.idade < p2.idade){
            console.log(`${p2.nome} é mais velho que ${p1.nome}`)
        } else console.log(`ambos tem a mesma idade`)
    };

   //const jaumum = new pessoa('marcelo', 26);
   //const marandi = new pessoa('jj', 32);

   //compararPessoas(jaumum,marandi);


// Exercicio - 1

    class Carro{
        marca;
        cor;
        
        constructor(marca,cor){
            this.marca = marca;
            this.cor = cor;
        }

        gastoMedio(kmRodado,gastoMedio,precoCombustivel){
            const gastoFinal = (kmRodado / gastoMedio) * precoCombustivel; 
            console.log(`O seu carro da marca : ${this.marca} e cor : ${this.cor} teve gasto final de : R$:${gastoFinal}`);
            return gastoFinal
        }
    };

    //const carroUm = new Carro('Honda', 'Preta');
    //carroUm.gastoMedio(100,10,5.59);
    //console.log(carroUm);

// Exercicio - 2

class Humano {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
      const imc =  this.peso / (this.altura * this.altura);
      return imc;
    };

    classificacaoImc(){
       const imc = this.calcularImc();
       if(imc < 18.5){
            return "abaixo do peso";
        }else if (imc>= 18.5 && imc < 25 ){
            return "Peso normal";
        }else if ( imc>= 25 && imc < 30){
            return "gordao jaum"
        }else if ( imc>= 30 && imc < 40){
            return "Eita deus, ferrou"
        }else return "Obesidade em"
        }
}

const jose = new Humano('jose', 700, 1.75);
console.log(jose.calcularImc());
console.log(jose.classificacaoImc());