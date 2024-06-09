const caixaCursos = document.querySelector('#caixaCursos') // onde vai os cursos
const btn_c = [...document.querySelectorAll('.curso')] //todos com a class curso
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySQL', 'ReactNative']
//botões
const bntCursoSelecionado = document.getElementById('bntCursoSelecionado')
const bntRemoverSelecionado = document.querySelector('#bntRemoverCurso')
const btnAdicionarAntes = document.querySelector('#btnAdicionarAntes')
const btnAdicionarDepois = document.querySelector('#btnAdicionarDepois')
const nomeCurso = document.querySelector('#nomeCurso')

let indice = 0

const tirarSelecao = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el, i)=>{
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso = (curso)=>{
    const novo_el = document.createElement('div')
    novo_el.setAttribute('id', 'c'+ indice)
    novo_el.setAttribute('class', 'curso c1')
    novo_el.innerHTML = curso
    novo_el.addEventListener('click', (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })
    return novo_el
}

cursos.map((el, i)=>{
    const novo_el = criarNovoCurso(el)
    caixaCursos.appendChild(novo_el)
    indice++
})

//FUNÇÃO A SER USADA VÁRIAS VEZES
const cursoSelecionado = ()=>{ //está função retorna o curso que está selecionado
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
}

bntCursoSelecionado.addEventListener('click', (evt)=>{
    const cs = cursoSelecionado()
    console.log(cs)
    if(cs!=undefined){
        const cursoSelecionado = cs.textContent //pegando o nome do curso selecionado
        alert(`Curso selecionado: ${cursoSelecionado}`)
    } else{
        alert('Selecione um curso')
    }
})

bntRemoverSelecionado.addEventListener('click', (evt)=>{
    const cs = cursoSelecionado()
    if(cs!=undefined){
        const cursoSelecionado = cs
        cursoSelecionado.remove()
    } else{
        alert('Selecione um curso para removê-lo')
    }
})

btnAdicionarAntes.addEventListener('click', ()=>{
  const cs = cursoSelecionado()
  if(caixaCursos.children.length < 12){
    if(cs!=undefined){
        if(nomeCurso.value.length > 0){
            const cursoSelecionado = cs
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso, cursoSelecionado)
            indice++
        }else{
            alert('Escreva um nome para adicionar')
        }
      } else{
        alert('Selecione um curso')
      }
  } else{
    alert('Número máximo de cursos atingido')
  }
})

btnAdicionarDepois.addEventListener('click', ()=>{
    const cs = cursoSelecionado()
    if(caixaCursos.children.length < 12){
        if(cs!=undefined){
            if(nomeCurso.value.length > 0){
                const cursoSelecionado = cs
                const novoCurso = criarNovoCurso(nomeCurso.value)
                caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)
            } else{
                alert('Escreva um nome para adicionar')
            }
        } else{
            alert('selecione um curso')
        }
    } else{
        alert('Número máximo de cursos atingido')
    }
})

const verificacao = ()=>{
    if(caixaCursos.children.length > 9){
        caixaCursos.style.height = '800px'
        console.log('tentando')
    }
    setTimeout(verificacao, 500)
}
verificacao()