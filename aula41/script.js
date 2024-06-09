const caixa1 = document.querySelector('#caixa1')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'React', 'ReactNative']
const bnt = document.querySelector('#bnt')


cursos.map((el, indice)=>{
    const novo_el = document.createElement('div')
    novo_el.innerHTML = el
    novo_el.setAttribute('id', 'c' + indice) // id=c0  id=c1  id=c2 etc..

    const bnt_lixeira = document.createElement('img')
    bnt_lixeira.setAttribute("scr", "aula41/54324.png")
    novo_el.appendChild(bnt_lixeira)

    novo_el.addEventListener('click', (evt)=>{
        caixa1.removeChild(evt.target)
    })
    novo_el.classList.add('curso', 'c1')
    caixa1.appendChild(novo_el)
})
