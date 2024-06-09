const converterint = (e) => parseInt(e)
const parOUimpar = (e) => {
    if(e%2 == 0){
        return e + ' é Par'
    } else{
        return e + ' é Impar'
    }
}
let n = ['1', '2', '3', '4', '5'].map(converterint)
console.log(n)

let num = ['1', '2', '3', '4', '5'].map(parOUimpar)
console.log(num)