const p_array = document.getElementById('array')
const txt_pesquisar = document.getElementById('txt_pesquisar')
const btnVerificar = document.getElementById('btnVerificar')
const resultado = document.getElementById('resultado')

const elementos_array = [21,25,19,20,16,18,22]
p_array.innerHTML = `[${elementos_array}]`

btnVerificar.addEventListener('click', (evt)=>{
    const ret = elementos_array.every((el, i, arr)=>{
        if( el<18){
            resultado.innerHTML = 'Array não conforme na posição ' + i
        }
        return el>=18
    })
    if(ret == true){
        resultado.innerHTML = 'Tudo ok!'
    }
})