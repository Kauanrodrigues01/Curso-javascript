const f = function(...valores){
    let soma = 0
    for(let i of valores){
        soma += i
    }
    return soma
}
console.log(f(10,5,7))