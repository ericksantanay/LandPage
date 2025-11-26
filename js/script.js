// Saídas
let d = document.getElementById('dia')
let h = document.getElementById('hora')
let m = document.getElementById('minutos')
let s = document.getElementById('segundos')

// Contagem
let targetDate = new Date("2025-12-03T00:00:00").getTime()

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



//##########################
//EFEITO SCROLL
//#########################
function revelarAoRolar() {
  let elementos = document.querySelectorAll('.efeito');

  for (let i = 0; i < elementos.length; i++) {
    let alturaTela = window.innerHeight;
    let topoElemento = elementos[i].getBoundingClientRect().top;
    let visivel = 150; // Quanto antes ele começa a aparecer

    if (topoElemento < alturaTela - visivel) {
      elementos[i].classList.add('active');
    } else {
      elementos[i].classList.remove('active');
    }
  }
}


window.addEventListener('scroll', revelarAoRolar)
revelarAoRolar() // ✅ executa no carregamento