const agg= document.getElementById('#agg')


function cambiar(){
    agg.style.backgroundColor= 'red'
    agg.style.color= 'blue'

}

agg.addEventListener('click',cambiar)