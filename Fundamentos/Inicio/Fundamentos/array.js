const valores = [7.7,8.9,6.3,9.2];
console.log(valores[0], valores[3]);

console.log(valores[4]);

valores[4] = 10;
console.log(valores);
console.log(valores.length); //verificar o tamanho

valores.push({id: 3}, false, null, 'Teste'); //acrescenta valores ao arrays
console.log(valores);

console.log(valores.pop()); // retirar o ultimo elemento do array
delete valores[0]; // tirar um atributo do objeto
console.log(valores);

console.log(typeof valores); // mostra o tipo da variavel 
