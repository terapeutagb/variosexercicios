function carregar() {
    let msg = document.querySelector(`div#msg`)
    let img = document.querySelector(`img#imagem`)
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    /*let dia = data.getDay()
    let ano = data.getFullYear()*/
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`/*, dia de ${dia}, do ano de ${ano}.`
    */
    if(hora >=0 && hora< 12) {
        // BOM DIA!!!
        img.src = `manha.png`
        document.body.style.background = `#e2cd9f`
    } else if(hora>=12 && hora <= 18) {
        // BOA TARDE!!!
        img.src = `tarde.png`
        document.body.style.background = `#b9846f`
    } else {
        // BOA NOITE
        img.src = `noite.png`
        document.body.style.background = `#515154`
    }
}
