removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}

function removerPropriedade(objeto, nomeDaPropriedade){
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]
    return copia
}
console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao"))

function removerPropriedade2(objeto, nomeDaPropriedade) {
    const copia = {...objeto}
    delete copia[nomeDaPropriedade]
       return copia
}
console.log(removerPropriedade2({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao"))      





const target = { a: 1, b: 2 };
const source = { c: 4, d: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }