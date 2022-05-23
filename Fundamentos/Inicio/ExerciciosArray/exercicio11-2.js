// considerando o array abaixo
// const arr = [4, 7, 10, 82, 35];

// Opção 1: Pelo tamanho do array
//const arr = [4, 7, 10, 82, 35];
function primeiroUltimo(arr){
let first = arr[0];
let last = arr[arr.length-1];
return [first, last]
}
console.log(primeiroUltimo(arr))


// Opção 2: Com shift(), pop() e Spread operator
//const arr = [4, 7, 10, 82, 35];
function primeiroUltimo(arr){
    let first = [...arr].shift();
    let last = [...arr].pop();
return [first, last]
}
console.log(primeiroUltimo(arr))



// Opção 3: Desestruturação
const arr = [4, 7, 10, 82, 35];
function primeiroUltimo(arr){
let {length, 0: first, [length-1]: last} = arr;
return [first, last]
}
console.log(primeiroUltimo(arr))