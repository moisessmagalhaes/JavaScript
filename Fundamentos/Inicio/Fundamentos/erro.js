function tratarErroELancar(erro) {
    // throw new Error('Erro de código');
    // throw 10;
    //throw true;
    // throw 'mensagem';
    throw {
        nome: erro.name,
        msg: erro.mensage,
        date: new Date
    }

}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.nome.toUpperCase() + '!!!');    
    } catch (e) {
        tratarErroELancar(e)
    } finally{
        console.log('Final!!!')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj);