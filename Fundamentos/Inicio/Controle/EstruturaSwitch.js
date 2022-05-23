const imprimirResultado = function(nota) {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Nota: ' + nota + ' -> Quadro de honra')
            break // para sair do bloco
        case 8: case 7:
            console.log('Nota: ' + nota + ' -> Aprovado')
            break // para sair do bloco
        case 6: case 5: case 4:
            console.log('Nota: ' + nota + ' -> Recuperação')
            break // para sair do bloco
        case 3: case 2: case 1: case 0:
            console.log('Nota: ' + nota + ' -> Reprovado')
            break // para sair do bloco
        default: // se nenhum atender ao case 
            console.log('Nota: ' + nota + ' -> Nota Inválida')
    }

    console.log('Fim')

}

imprimirResultado(10);
imprimirResultado(9);
imprimirResultado(8.9);
imprimirResultado(6);
imprimirResultado(3);
imprimirResultado(-1);
imprimirResultado(11);
