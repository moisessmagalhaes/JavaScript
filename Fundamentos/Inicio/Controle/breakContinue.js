const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums) {
    if(x == 3) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log("----------------------")

for(let y in nums){
    if(y == 1){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log("----------------------")
externo: // rótulo
for(a in nums){
    for(b in nums){
        if(a == 2 && b == 3) break externo // para o break agir no bloco mais externo
        console.log(`Par = ${a}, ${b}`)
    }
}
