
const promsessaDeUmNumero = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
    },1000)
})

promsessaDeUmNumero
.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log('indepedente meu fi, finally em vc!!!')
})

const { error } = require('console')

// outro tema

const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname,'tarefas.csv')

const promesaDaLeitura = fs.promises.readFile(filePath)

promesaDaLeitura
.then((arquivo) => arquivo.toString('utf-8'))
.then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
.then((linhasSemOCabecalho)=> linhasSemOCabecalho.map((linha)=>{
    const [nome, estado] = linha.split(';')
    return{
        nome,
        estado: estado.trim() === 'true'
    }
}))
//.then((listaDeTarefas) => console.log(listaDeTarefas))
.catch((error)=>{
    console.log("Deu Ruim", error)
})

// Async Await

async function buscarArquivo() {
    try{
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)

    } catch(error){
        console.log(error)
    } finally{
        console.log('finalista')
    }
}

buscarArquivo()