// Trocar o valor da variável a por b e b por a
let a = 7;
let b = 94;
let c;

console.log("o valor da variavel a é: " + a );
console.log("o valor da variavel b é: " + b );

// Primeira opção para inverter os valores das variáveis a, b
//c = a;
//a = b;
//b = c;
// segunda opção para inverter os valores das variáveis a, b
[a,b] = [b,a]; 
console.log("o valor da variavel a é: " + a );
console.log("o valor da variavel b é: " + b );



