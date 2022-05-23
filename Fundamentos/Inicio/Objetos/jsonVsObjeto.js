// Gerar um objeto JSON
const obj = { a: 1, b: 2, c: 3, 
    soma() { return a + b + c}} // Não permite função, retorna apenas o texto
console.log(JSON.stringify(obj))

// Converter um objeto JSON para texto
// console.log(JSON.parse("{ a: 1, b: 2, c: 3")) - formato incorreto
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))
console.log('{"a": 1, "b": 2, "c": 3}') // atributo deve ser em aspas duplas dentro das aspas simples
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }'))
 