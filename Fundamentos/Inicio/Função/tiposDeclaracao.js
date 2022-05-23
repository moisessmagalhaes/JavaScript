console.log(soma(5,4))

// funcion declaration - permite usar o console antes
function soma(x, y) {
    return x + y
}

// function expression - não permite usar o console antes
const sub = function(x, y) {
    return x - y
}

console.log(sub(5,4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(5,4))