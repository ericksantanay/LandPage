// Saídas
let d = document.getElementById('dia')
let h = document.getElementById('hora')
let m = document.getElementById('minutos')
let s = document.getElementById('segundos')

// Contagem
let targetDate = new Date("Dec 03, 2025 00:00:00").getTime()

let contador = setInterval(() => {
    let data = new Date().getTime()
    let time = targetDate - data

    // Dias
    let dia = Math.floor(time / (1000 * 60 * 60 * 24))
    d.innerText = dia

    // Horas
    let hora = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    h.innerText = hora

    // Minutos
    let minutos = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    m.innerText = minutos

    // Segundos
    let segundos = Math.floor((time % (1000 * 60)) / 1000)
    s.innerText = segundos

    // Quando zerar
    if (time <= 0) {
        clearInterval(contador)
    }

}, 1000)
