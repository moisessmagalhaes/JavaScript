const nome = 'Rebeca';
const concatenação = 'Olá ' + nome + '!';
const template = `
Olá
${nome}!`

console.log(concatenação, template);

const nome1 = 'Mariana';
const concatenação1 = 'Olá ' + nome1 + '!';
const template1 = `
Olá 
${nome1}!`

console.log(concatenação1, template1);

//Expressões começa com $ abre e fecha {}
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei.. ${up('cuidado')}!`);
