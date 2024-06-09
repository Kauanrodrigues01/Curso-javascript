function soma(...valores){
    var soma = 0
    for(let i of valores){
        soma += i
    }
    return soma
}

console.log(soma(5,8,1,5))