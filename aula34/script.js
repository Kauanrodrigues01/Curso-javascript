// const c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const el = evt.target
        if (el.classList.contains('destaque')){
            el.classList.remove('destaque')
        } 
        else{
            el.classList.add('destaque')
        }
        console.log(el.innerHTML + ' Foi clicado')
    })
})

// c1.addEventListener('click', (evt) => {
//     const el = evt.target
//     el.classList.add('destaque')
// })