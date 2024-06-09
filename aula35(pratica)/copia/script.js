// está copia transferi os cursos sem precisar clicar no botão, ele usa a propria evento de click do elemento para já ver se ele tem a class destaque ou não. E já transferi direto

const cursos = [...document.querySelectorAll('.curso')]
const caixa2 = document.getElementById('caixa2')
const btn = document.getElementById('btn')
const caixa1 = document.getElementById('caixa1')

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const el = evt.target // evt.target pega o elemento que acionou o evento, no caso o elemento que eu clicar
        el.classList.toggle('destaque') // toggle adiona ou remove a classe
        cursos.map((el)=>{
            if (el.classList.contains('destaque')){
                caixa2.appendChild(el)
            } else {
            caixa1.appendChild(el)
            }
        })
    })
})

