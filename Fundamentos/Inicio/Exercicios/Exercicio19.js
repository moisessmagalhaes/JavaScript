        function calcularValor(codigo, qtde){
            switch(codigo){
                case 100:
                    console.log(`Cachorro Quente -> Qtde: ${qtde} -> Valor: R$ ${qtde * 3.00},00`)
                    break
                case 200:
                    console.log(`Hambúrguer Simples -> Qtde: ${qtde} -> Valor: R$ ${qtde * 4.00},00`)
                    break
                case 300:
                    console.log(`Cheeseburguer ->  Qtde: ${qtde} -> Valor: R$ ${qtde * 5.50},00`)
                    break
                case 400:
                    console.log(`Bauru -> Qtde: ${qtde} -> Valor:  R$ ${qtde * 7.50},00`)
                    break
                case 500:
                    console.log(`Refrigerante -> Qtde: ${qtde} -> Valor: R$ ${qtde * 3.50}0`)
                    break
                case 600:
                    console.log(`Suco -> Qtde: ${qtde} -> Valor:  R$ ${qtde * 2.80}0`)
                    break
                default:
                    console.log(`Código produto: ${codigo}, inexistente!`)
        }
    }
calcularValor(100, 5)
calcularValor(200, 3)
calcularValor(300, 2)
calcularValor(400, 4)
calcularValor(500, 1)
calcularValor(600, 2)
calcularValor(150, 5)
    