function contar() {
 let numinicio = document.querySelector(`input#cngb`)
 let numfim = document.querySelector(`input#cngb1`) 
 let numpasso = document.querySelector(`input#cngb2`)
 let res = document.querySelector(`div#res`)

 if(numinicio.value.length==0 || numfim.value.length==0 || numpasso.value.length==0) {
     window.alert(`[ERROR]Deu erro, verifique os dados e tente novamente`)
} else {
       // alert(`Tudo Certo`)
        res.innerHTML = `Conta GB: <br>`
        let z = Number(numinicio.value)
        let w = Number(numfim.value)
        let r = Number(numpasso.value)
        if(r<=0){
            r=1
        }
        if(z<w) {
            //contagem crescente
            for (let v = z; v<=w; v +=r ) {
                res.innerHTML += `${v}\u{1F603}  `
        }
               } else {
            //contagem decrescente
            for (let v = z; v>=w; v-=r) {

                res.innerHTML += `${v}\u{1F603}  `
            }
        }
        res.innerHTML += `\u{1F3C1} `
        }
    }



