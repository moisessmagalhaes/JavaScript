function validarFormaTriangulo(a, b, c){
    if(a <= b + c && b <= a + c && c <= a + b ){ // condição de existência do triangulo
        if(a === b && b === c){ // Classificar triangulo
            console.log('Triangulo Isoscele')
        } else if(a == b || b == c || a == c ){
            console.log('Triangulo Escaleno')
        } else if(a != b || b != c || a != c ){
            console.log('Triangulo Equilatero')
        }            
        } else {
            console.log('Não é um triangulo')
    }
}
validarFormaTriangulo(3, 2, 1)