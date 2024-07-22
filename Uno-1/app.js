const pelota = document.querySelector('#circulo');
const btnMover = document.querySelector('#btnMover');
const busqued= document.querySelector('#boxx')
const ini= document.querySelector('#regresar')
let e = 0;
console.log(pelota)
console.log(btnMover)


function mover(){

    if(e == 0){
        pelota.style.marginLeft = '886px';
        pelota.style.transitionDuration = '.5s';
        e=1;
        

    }
    else{
        pelota.style.marginLeft = '0px';
        pelota.style.backgroundColor = 'gray';
    
        e=0;

    }
}
function cambiarcolor(){
    pelota.style.backgroundColor= busqued.value;
}
btnMover.addEventListener('click',mover);
btnMover.addEventListener('click',cambiarcolor);
btnMover.addEventListener('click',regresar)
ini.addEventListener('click',mover)
