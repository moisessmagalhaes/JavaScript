function validarForma(a, b, c){
    if (a <= b + c && b <= a + c && c <= a + b) {
        if(a == b && b == c ){
            console.log('Triângule Isoscele')
        } else if (a == b || b == c || a == c ) {
            console.log('Triângulo Escaleno')       
        } else if (a != b || b != c || a != c ) {
            console.log('Triângulo Equilatero')
        }
    } else{
        console.log('Não é triangulo!')
    }
    // console.log('Fim')
}
validarForma(7, 1, 4)

/*
//Verificar se é um triangulo
function validarTriangulo(a, b, c){
    if (a <= b + c && b <= a + c && c <= a + b) {
        return 'É um triangulo'} else {
            return 'Não é um triangulo'
        }
}
console.log(validarTriangulo(3, 3, 2))*/