function relogio(){
    var hora = document.getElementById('hora')
    var min = document.getElementById('min')
    var seg = document.getElementById('seg')

    var conthor = 0
    var contmin = 0
    var contseg = 0

    hora.innerHTML = String(conthor).padStart(2, '0')
    min.innerHTML = String(contmin).padStart(2, '0')
    seg.innerHTML = String(contseg).padStart(2, '0')

    inicio()

function inicio(){
setInterval(()=>{

    

    if(conthor == 23 && contmin == 59 && contseg == 59){
        conthor = 0
        contmin = 0
        contseg = 0

        hora.innerHTML = String(conthor).padStart(2, '0')
        min.innerHTML = String(contmin).padStart(2, '0')
        seg.innerHTML = String(contseg).padStart(2, '0')
    
    }else if(contmin == 59 && contseg == 59){
    

        conthor++
        contmin = 0
        contseg = 0

        hora.innerHTML = String(conthor).padStart(2, '0')
        min.innerHTML = String(contmin).padStart(2, '0')
        seg.innerHTML = String(contseg).padStart(2, '0')

    }else if(contseg == 59){
    
        contmin++
        contseg = 0

        min.innerHTML = String(contmin).padStart(2, '0')
        seg.innerHTML = String(contseg).padStart(2, '0')
    }else{
        contseg++
        seg.innerHTML = String(contseg).padStart(2, '0')
    }

}, 1000)
    }

}

document.addEventListener('load', relogio())