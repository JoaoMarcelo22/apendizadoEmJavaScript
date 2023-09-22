var teste1;

function teste2(){
    console.log('teste 2')
}

teste1(); // com a chamada da variavel funcão, a variavel é iniciada no todo do codigo, mas não é instanciada.
teste2(); // já o fuction é intanciado no inicio do codigo.

teste1 = function(){
    console.log('teste 1');
}