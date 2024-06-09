const caixa1 = document.querySelector('#caixa1')
const cursos = [...document.querySelectorAll('.curso')]

console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)
console.log(caixa1.children)
console.log(cursos.getRootNode())
console.log(cursos[0].ownerDocument)