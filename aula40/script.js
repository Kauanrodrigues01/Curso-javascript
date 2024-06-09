const caixa1 = document.querySelector('#caixa1')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'React', 'ReactNative']
const bnt = document.querySelector('#bnt')

let evento_ocorreu = false // garante que vai ser usado a primeira vez

bnt.addEventListener('click', ()=>{
    if(!evento_ocorreu){ // controla para que só possa ser adicionado
        cursos.map((el, indice)=>{
            const novo_el = document.createElement('div')
            novo_el.innerHTML = el
            novo_el.setAttribute('id', 'c' + indice) // id=c0  id=c1  id=c2 etc..
            novo_el.classList.add('curso', 'c1')
            caixa1.appendChild(novo_el)
        })
        evento_ocorreu = true // garante que não vai usar mais outra vez
    }
    
})
