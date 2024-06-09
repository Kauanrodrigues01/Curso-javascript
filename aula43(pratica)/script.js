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

const criarNovoCurso = (curso)=>{
    const novo_el = document.createElement('div')
    novo_el.setAttribute('id', 'c'+ indice)
    novo_el.setAttribute('class', 'curso c1')
    novo_el.innerHTML = curso

    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type', 'radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    novo_el.appendChild(comandos)
    return novo_el
}

cursos.map((el, i)=>{
    const novo_el = criarNovoCurso(el)
    caixaCursos.appendChild(novo_el)
    indice++
})

//FUNÇÃO A SER USADA VÁRIAS VEZES
const radioSelecionado = ()=>{ //está função retorna o curso que está selecionado
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radioSelecionado = todosRadios.filter((el, ind, arr)=>{return el.checked})
    return radioSelecionado = radioSelecionado[0]
}

bntCursoSelecionado.addEventListener('click', (evt)=>{
    const rs = radioSelecionado() //chamando a função para adquirir o radio que está selecionado
    if(rs!=undefined){
        const cursoSelecionado = rs.parentNode.previousSibling.textContent //pegando o nome do curso selecionado
        alert(`Curso selecionado: ${cursoSelecionado}`)
    } else{
        alert('Selecione um curso')
    }
})

bntRemoverSelecionado.addEventListener('click', (evt)=>{
    const rs = radioSelecionado() //chamando a função para adquirir o radio que está selecionado
    if(rs!=undefined){
        const cursoSelecionado = rs.parentNode.parentNode //pegando a div completa para poder Removê-la
        cursoSelecionado.remove()
    } else{
        alert('Selecione um curso para removê-lo')
    }
})

btnAdicionarAntes.addEventListener('click', ()=>{
  const rs = radioSelecionado()
  if(caixaCursos.children.length < 12){
    if(rs!=undefined){
        if(nomeCurso.value.length > 0){
            const cursoSelecionado = rs.parentNode.parentNode
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
    const rs = radioSelecionado()
    if(caixaCursos.children.length < 12){
        if(rs!=undefined){
            if(nomeCurso.value.length > 0){
                const cursoSelecionado = rs.parentNode.parentNode
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