/* 
Fórmula geral da PA = (a1 + r * n )
a1 - Primeiro termo
n - Posição(índice) do termo que quer determinar
r - Razão (número que será somado ao primeiro termo)
*/

function pA(n, a1, r){
    for(let i = 0; i < n; i++){
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)
}


/* 
Fórmula geral da PG = a1 * (r** q)
a1 - Primeiro termo
n - Posição(índice) do termo que quer determinar
q - Razão (número que será multiplicado ao termo anterior)
*/

function pG(n, a1, q) {
    for(let i = 0; i < n; i++){
       console.log(a1 *(q**i)) 
    }
    console.log('Soma: ' + (a1 * ((q**n)-1))/(q-1))
}

console.log('Progressão Aritmética')
pA(5, 2, 15)
console.log()
console.log('Progressão Geométrica')
pG(5, 5, 3)
