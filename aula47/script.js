const p_array = document.getElementById('array')
const txt_pesquisar = document.getElementById('txt_pesquisar')
const btnPesquisar = document.getElementById('btnPesquisar')
const resultado = document.getElementById('resultado')

const elementos_array = ['html', 'css', 'javascript']
p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener('click', (evt)=>{
    const elPesquisado = elementos_array.find((el,i,arr)=>{
        if(el==txt_pesquisar.value.toLowerCase()){
            resultado.innerHTML = 'Valor pesquisado: ' + el + ' na posição ' + i
            return true
        } else{
            resultado.innerHTML = 'Valor não encontrado'
        }
    })
    console.log(elPesquisado)
})