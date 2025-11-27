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
const elementos = document.querySelectorAll('.efeito');

const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('ativo');   // aparece
        } else {
            entrada.target.classList.remove('ativo'); // some ao sair — permite repetir
        }
    });
}, { threshold: 0.15 }); // 15% do elemento visível já ativa

elementos.forEach(el => observer.observe(el));


//#################################
// MENU 
//################################
let men = document.getElementById('menuB')


function ClickMenu() {
  if (mobile.style.display == 'block') {
    mobile.style.display = 'none'
    men.innerText = "menu"
    document.body.style.transition = '.4s'
  }else {
    mobile.style.display = 'block'
    men.innerText = "close"
  }
}