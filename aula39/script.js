const caixa1 = document.querySelector('#caixa1')
const cursos = [...document.querySelectorAll('.curso')]
const c1 = document.querySelector('#c1')
const c1_2 = document.querySelector('#c1_2')

console.log(c1_2.parentElement.parentElement.parentElement.children[4])

console.log(caixa1.hasChildNodes())
console.log(cursos[0].hasChildNodes())
console.log(cursos[0].childNodes)

if(cursos[0].children.length > 0){
    console.log('Ele tem filhos')
} else{
    console.log('Não tem filhos')
}

console.log(caixa1.children.length > 0 ? 'Possui filhos' : 'Não possui filhos')

caixa1.children[2].innerHTML = 'TESTE'