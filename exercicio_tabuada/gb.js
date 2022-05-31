function tabuada() {
    let num = document.querySelector(`input#tabgb`)
    let tab = document.querySelector(`select#gbtab`)
    if (num.value.length==0) {
        alert (`Please, digite um número!`)
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ``
        while(c<=10) {
            let g = document.createElement(`option`)
            g.text = `${n} x ${c} = ${n*c}`
            g.value = `tab${c}`
            tab.appendChild(g)
            c++
        }
    }
}