let valor; // não inicializada
console.log(valor);

valor = null; // ausencia de valor
console.log(valor);
// console.log(valor.toString()); erro

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // não atribuir 
console.log(!!produto.preco);
console.log(produto);

produto.preco = null
console.log(!!produto);
console.log(produto);