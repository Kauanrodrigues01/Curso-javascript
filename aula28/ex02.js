const cursos = ['HTML', 'CSS', 'JavaScript', 'React', 'PHP']
let c = cursos.map((elemento, indice) =>{
    return `curso: ${elemento}`
})
console.log(c)