function tocaSomPom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.locaName === 'audio'){
        elemento.play;
    }
    else{
        console.log('Elementonão encontrado ou seletor inválido');
    }
}

const listadeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador <listadeTeclas.length; contador ++){
    const tecla = listadeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
}

tecla.onclick = function(){
    tocaSomPom(idAudio);
}

tecla.onkeydown =function(evento){
    if (evento.code === 'Space' || evento.code === 'Enter'){
        tecla.classList.add('ativa');
    }
}

listadeTeclas[0].onclick = tocaSomPom;