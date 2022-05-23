// Middleware pattern (chain of responsability - Cadeia de responsabilidade)
const passo1 =  (ctx, next) => {
    ctx.valor = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 =  'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewares) => { // ... - operador rest junta várias funções dentro de um array
    const execPasso = indice => {  // executa o passo de cada indice
        middlewares && indice < middlewares.length && // testa se o indice que passou é menor que o tamanho do array, para não executar um indice fora do array
            middlewares[indice](ctx, () => execPasso(indice + 1)) // recursividade, a função chama a própria função passando o indice + 1
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)

