// Operador ... rest(juntar) / spread(espalhar)
// Usar rest como parâmetro de função
// Usar spread com objetos
const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = { ativo: true , ...funcionario }
// const clone = { ...funcionario,  ativo: true }
console.log(clone)


// Usar spread com Array
const grupoA = [ 'João', 'Pedro', 'Glória']
const grupoFinal = [ 'Maria', ...grupoA, 'Rafaela'] // colocar todos os elementos de um array dentro de outro array
console.log(grupoFinal)