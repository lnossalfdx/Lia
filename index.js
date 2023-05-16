function iniciar(){
    var p01 = document.querySelector('#p01')
    var botãoiniciar = document.querySelector('#botãoiniciar')
    p01.innerHTML = 'O intuíto deste site é gerarmos vários enigmas, utilizando todo tipo de funcionalidade do seu computador!</br>'

    botãoiniciar.style.display = 'none';
    var senha = document.querySelector('#teste1')
    senha.style.display = 'block';

}



function analisar(){
    var txtpassword = document.querySelector('#txtdateinicial')
    console.log(txtdateinicial)
    if (txtpassword.value == '2022-06-03'){
        window.document.body.style.background= '#016908';
        var reserrada = document.querySelector("#erradaresposta")
        var nextlevel = document.querySelector('#nextlevel')
        reserrada.style.display = 'none'
        var p01 = document.querySelector('#p01')
        var lia = document.querySelector('#lia')
        var rescerta = document.querySelector('#certaresposta')
        p01.style.display= 'none';
        lia.style.display = 'block';
        rescerta.style.display = 'block';
        rescerta.style.font ='italic 30px arial'
        lia.style.font ='italic 30px arial'
        lia.innerHTML = 'E agora vai vir a Lia! <3'
        nextlevel.style.display = 'inline'

        nextlevel.addEventListener('click', fase)

            function fase(){
                window.location.assign('http://127.0.0.1:5500/keny/index2.html');
            }
        

    }else{
        var reserrada = document.querySelector("#erradaresposta")
        var lia = document.querySelector('#lia')
        var rescerta = document.querySelector('#certaresposta')
        lia.style.display = 'none'
        rescerta.style.display = 'none'
        window.document.body.style.background = 'red'
        reserrada.style.display = 'block';
        reserrada.innerHTML = '[ERRO] Resposta errada mozii, que feio! :( '

    }
}   

