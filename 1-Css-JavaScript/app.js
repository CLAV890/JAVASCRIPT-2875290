//div.nube*4.

.const solGuia = document.querySelector('.guia');
const sol = document.querySelector('.sol');
const nubeUno = document.querySelector('.uno');
const nubeDos = document.querySelector('.dos');
const nubeTres = document.querySelector('.tres');
const nubeCuatro = document.querySelector('.cuatro');

function moverSol() {
    sol.style.animationName = 'move'
    sol.style.animationDuration = '3s'
    sol.style.animationIterationCount = 'infinite'
    solGuia.style.animationName = 'move'
    solGuia.style.animationDuration = '3s'
    solGuia.style.animationIterationCount = 'infinite'


    console.log('Ejecutando')
}
function moverNubes1() {
    nubeUno.style.animationName = 'nube'
    nubeUno.style.animationDuration = '6s'
    nubeUno.style.animationIterationCount = 'infinite'
    nubeDos.style.animationName = 'nube'
    nubeDos.style.animationDuration = '4s'
    nubeDos.style.animationIterationCount = 'infinite'

}
function moverNubes2() {
    nubeTres.style.animationName = 'nube2'
    nubeTres.style.animationDuration = '6s'
    nubeTres.style.animationIterationCount = 'infinite'
    nubeCuatro.style.animationName = 'nube2'
    nubeCuatro.style.animationDuration = '8s'
    nubeCuatro.style.animationIterationCount = 'infinite'
}

sol.addEventListener('click', moverSol);
solGuia.addEventListener('click', moverSol);
nubeUno.addEventListener('click', moverNubes1);
nubeDos.addEventListener('click', moverNubes1);
nubeTres.addEventListener('click', moverNubes2);
nubeCuatro.addEventListener('click', moverNubes2);
