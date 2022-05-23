// Tabela verdade
/* Operadores binarios E
 v e v -> v;
 v e f -> f;
 v e ? -> f;*/

// Operadores binários OU
/*V ou ? v;
f ou v -> v;
f ou f -> f*/

// Operadores Ou exclusivo
/*v xor v -> f;
v xor f -> v;
f xor v -> V;
f xor f -> f;*/

// Operadores de negação
/*!v -> f;
!f -> V;*/

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    // const comprarTv32 = !!(trabalho2 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2;
    const manterSaudavel = !comprarSorvete; // operador unário

    return{ comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true,true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));




