function filtrarNumero(dados){
    let resultado = []
    for(let item of dados) 
        if(typeof item === "number")
        resultado.push(item)
        
        return resultado
} 
console.log(filtrarNumero(['A',1,'2',10,30]))

function filtrarNumero2(item){
    return item.filter(item => typeof item === "number") 
}
console.log(filtrarNumero2(['A',1,'2',10,30]))

function filtrarString(item){
    return item.filter(item => typeof item === "string")
}
console.log(filtrarString(['A',1,'2',10,30]))