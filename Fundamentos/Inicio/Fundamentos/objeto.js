const prod1 = {};
prod1.nome = 'Celular ultra Mega';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40 // evitar usar atributos com espaço

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        valor1: 1,
        valor2: 2,
        obj: {
            valor1: 1,
            valor2: 2,
        }
    }
}

console.log(prod2);

// Objeto é uma coleção de chaves e valor
//Json é um formato textual, trocar dados entre sistemas.
'{ "nome": "Camisa Polo", "preco": 79.90}'