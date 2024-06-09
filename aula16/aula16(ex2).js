const objs = document.getElementsByTagName('div')

for(i of objs){
    console.log(i.innerHTML = 'cursos')
}

for(i in objs){
    console.log(objs[i].innerHTML)
}