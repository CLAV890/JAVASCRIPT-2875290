const listacolores= document.querySelector('#listaColores')
const btnColores= document.querySelector('#btnColores')
const main= document.querySelector('#main')


function crear(){
   const ball = document.createElement('div');
   ball.innerText= 'pelotica'
   ball.classList.add('pelotica')

   ball.style.backgroundColor= listacolores.value
   main.appendChild(ball);
   console.log
}

btnColores.addEventListener('click',crear)