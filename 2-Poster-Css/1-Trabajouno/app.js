//div.nube*4

const play = document.querySelector('.play');
const mario = document.querySelector('.mario')
const mario2 = document.querySelector('.mario2');
const moneda = document.querySelector('.moneda')
const fuego = document.querySelector('.fuego');
const tortuga = document.querySelector('.tortuga')
const mostro = document.querySelector('.mostro')


function girar(){
    fuego.style.animationName = 'girar'
    fuego.style.animationDuration = '0.2ms'
    fuego.style.animationIterationCount = 'infinite'

    fuego.style.animationName = 'moverFuego'
    fuego.style.animationDuration = '2s'
    fuego.style.animationIterationCount = 'infinite'

   /*  fuego.style.animationName = 'trasparente'
    fuego.style.animationDuration = '5s'
    fuego.style.animationIterationCount = 'infinite'   */


    tortuga.style.animationName= 'trasladar'
    tortuga.style.animationDuration = '5s'
    tortuga.style.animationIterationCount= 'infinite'
  
    mostro.style.animationName= 'trasladar'
    mostro.style.animationDuration = '5s'
    mostro.style.animationIterationCount= 'infinite'
  
    mario.style.animationName= 'trasladar'
    mario.style.animationDuration = '5s'
    mario.style.animationIterationCount= 'infinite'
  
    mario.style.animationName= 'trasladar'
    mario.style.animationDuration = '5s'
    mario.style.animationIterationCount= 'infinite'
  
}


  
play.addEventListener('click',girar)