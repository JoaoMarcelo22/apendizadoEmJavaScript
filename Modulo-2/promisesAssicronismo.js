
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