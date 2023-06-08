function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else{
        alert('elemento não encontrado ou seletor invalido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let ct = 0; ct < listaDeTeclas.length; ct++){

    const tecla = listaDeTeclas[ct];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        if(evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');            
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
