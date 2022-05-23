let a = 3; // variável fica local

global.b = 123 
this.c = 456; // exporta a variável para fora do contexto
this.d = false;
this.e = 'teste';

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

module.exports = { e: 456, f: false, g: 'teste' } 

// Criando uma variável maluca sem var e let
abc = 3; // não é recomendado pois coloca no objeto global
console.log(global.abc)

// conhecer o rumtime(local onde está executando o js)
// não coloque variáveis no escopo global, fuja do escopo global