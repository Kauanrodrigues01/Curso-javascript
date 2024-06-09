const cursos = [...document.querySelectorAll('.curso')]
const caixa2 = document.getElementById('caixa2')
const btn = document.getElementById('btn')
const caixa1 = document.getElementById('caixa1')

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const el = evt.target // evt.target pega o elemento que acionou o evento, no caso o elemento que eu clicar
        el.classList.toggle('destaque') // toggle adiona ou remove a classe
    })
})

btn.addEventListener('click', ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.destaque')]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursos.map((el)=>{
        if(!el.classList.contains('destaque')){
            caixa1.appendChild(el)
        }
    })
})