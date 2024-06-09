const todasTarefas = [...document.querySelectorAll('.tarefa')]
const input_novaTarefa = document.createElement('input')
input_novaTarefa.setAttribute('type', 'text')
input_novaTarefa.setAttribute('class', 'input')
document.body.insertBefore(input_novaTarefa, lista)


// Criando elementos dinamicamente para poder contar as tarefas
const p_contarConcluidas = document.createElement('p')
p_contarConcluidas.classList.add('p_completada')
p_contarConcluidas.innerHTML = 'Tasks completed: '
const span_concluidas = document.createElement('span')
span_concluidas.classList.add('p_completada')
p_contarConcluidas.appendChild(span_concluidas)

const p_contarNaoConcluidas = document.createElement('p')
p_contarNaoConcluidas.innerHTML = 'Tasks not completed: '
p_contarNaoConcluidas.classList.add('p_nao_completada')
const span_naoConcluidas = document.createElement('span')
span_naoConcluidas.classList.add('p_nao_completada')
p_contarNaoConcluidas.appendChild(span_naoConcluidas)

document.body.appendChild(p_contarConcluidas)
document.body.appendChild(p_contarNaoConcluidas)

// Função para contar as tarefas concluidas
const contarConcluidas = ()=>{
    let tasksConcluidas = [...document.querySelectorAll('.concluida')]
    tasksConcluidas = tasksConcluidas.length
    span_concluidas.innerHTML = tasksConcluidas
}

// Função para contar as tarefas NÃO concluidas
const contarNaoConcluidas = ()=>{
    let tasksNaoConcluidas = [...document.querySelectorAll('.tarefa')]
    tasksNaoConcluidas = tasksNaoConcluidas.filter((el,i,arr)=>{
        if(!el.classList.contains('concluida')){
            return el
        }
    })
    span_naoConcluidas.innerHTML = tasksNaoConcluidas.length
}
//chamando as funções para poder ter um resultado logo de cara
contarConcluidas()
contarNaoConcluidas()

todasTarefas.map((el, i)=>{
    el.addEventListener('click', (evt)=>{
        el.classList.toggle('concluida')
        // atualizando a contagem toda vez que o usuario clicar
        contarConcluidas()
        contarNaoConcluidas()
    })
})

