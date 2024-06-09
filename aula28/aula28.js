// const el = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el, ({innerHTML}) =>innerHTML)
// console.log(val)

let el = document.getElementsByTagName('div')
el = [...el]
console.log(el)
el.map((e, i)=>{
    e.innerHTML = 'CFB cursos'
    console.log(e.innerHTML)
})

