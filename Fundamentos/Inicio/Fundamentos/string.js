const escola = "Cod3r";

console.log(escola.charAt(4));  // pega a posição 4 da expressão
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); //mostra em ascii
console.log(escola.indexOf('r')); // mostra a posição

console.log(escola.substring(1));
console.log(escola.substring(0,3));

console.log('Escola '.concat(escola).concat("!"));
console.log('Escola '+ escola + "!");

console.log(escola.replace(3,'E'));
console.log(escola.replace(/\w/g, 'e'));

console.log('Ana, Maria, Pedro'.split(';')); // array
console.log('Ana, Maria, Pedro'.split(/;/)); // regex
console.log('Ana, Maria, Pedro'.split(/./)); // regex
