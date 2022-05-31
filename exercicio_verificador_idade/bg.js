function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector(`input#gbano`)
    let res = document.querySelector(`div#res`)
    
   if (fano.value.length == 0 || Number(fano.value)> ano) {
       alert(`[ERRO] Verifique os dados e tente novamente!!AB`)
    } else {
    let fsex = document.getElementsByName(`gbsex`)
    let idade = ano - Number(fano.value)
    let gênero = ``
    let img = document.createElement(`img`)
    img.setAttribute(`id`, `foto`)
    if (fsex[0].checked) {
        gênero = `Masculino`
        if (idade>=0 && idade<10){
            //criança
            img.setAttribute(`src`, `foto-crianca_masculino.png`)
        } else if(idade<21){
            //jovem
            img.setAttribute(`src`, `foto-jovem_masculino.png`)
        } else if(idade<50){
            //adulto
            img.setAttribute(`src`, `foto-homem_adulto.png`)
        } else{
            //velho
            img.setAttribute(`src`, `foto-homem_velho.png`)
        }
    } else if (fsex[1].checked) {
        gênero = `Feminino`
        if (idade>=0 && idade<10){
            //criança
            img.setAttribute(`src`, `foto-crianca_feminina.png`)
        } else if(idade<21){
            //jovem
            img.setAttribute(`src`, `foto-jovem_mulher.png`)
        } else if(idade<50){
            //adulto
            img.setAttribute(`src`, `foto-mulher_adulta.png`)
        } else{
            //velho
            img.setAttribute(`src`, `foto-mulher_velha.png`)
        }
    }
    res.style.textAlign = `center`
    res.innerHTML = `Uma pessoa do sexo ${gênero} com ${idade} anos.`
    res.appendChild(img)    
}
}