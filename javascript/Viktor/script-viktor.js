function jogar (escolha1){

    while(escolha1 !== 'sim' || escolha1 !== 'Sim' || escolha1 !== 's' || escolha1 !== 'S' || escolha1 !== 'nao' || escolha1 !== 'Nao' || escolha1 !== 'Não' || escolha1 !== 'n' || escolha1 !== 'N' ){

        escolha1 = prompt(' "Foi um dia agitado..." você pensa, logo após presenciar o que talvez seria um futuro projeto a se desenvolver. "Tecnologia com mágia?", talvez uma outrora pensasse ser uma ideia ridicula, mas naquele momento não era, nada tirava isso de sua cabeça, nem mesmo sua assistente que vivia com ídeias merabulantes que talvez fossem promissoras. Então surge uma ideia em sua cabeça, "Talvez eu possa convencer Heimerdinger..."\n Jogador, ele deve seguir adiante com essa ideia?\n\n1.Sim\n2.Não')

        if(escolha1 === 'sim' || escolha1 === 'Sim' || escolha1 === 's' || escolha1 === 'S'){
            window.location.href = '../../htmls/Viktor/escolha1-viktor.html'
            break
        }else if(escolha1 === 'nao' || escolha1 === 'Nao' || escolha1 === 'Não' || escolha1 === 'Não' || escolha1 === 'n' || escolha1 === 'N' ){
            window.location.href = '../../htmls/Viktor/give-up1.html'
            break
        }else{
            alert('Escolha inválida')
        }
        
    }
}

function escolherSimouNao (escolha2){

    while(escolha2 !== 'sim' || escolha2 !== 'Sim' || escolha2 !== 's' || escolha2 !== 'S' || escolha2 !== 'nao' || escolha2 !== 'Nao' || escolha2 !== 'Não'|| escolha2 !== 'n' || escolha2 !== 'N' ){

        escolha2 = prompt('Viktor deve ou não levar esse livro e quem sabe, estudar o que há nele?\n\n1.Sim, ele deve "pegar emprestado". por um tempo\n2.Não, ele deve seguir a vida normal.')

        if(escolha2 === 'sim' || escolha2 === 'Sim' || escolha2 === 's' || escolha2 === 'S'){
            window.location.href = '../../htmls/Viktor/escolha2-viktor.html'
            break
        }else if(escolha2 === 'nao' || escolha2 === 'Nao' || escolha2 === 'Não' || escolha2 === 'Não' || escolha2 === 'n' || escolha2 === 'N' ){
            window.location.href = '../../htmls/Viktor/give-up2.html'
            break
        }else{
            alert('Escolha inválida')
        }
    }
}

function escolherSimouNao2 (escolha3){

    while(escolha3 !== 'sim' || escolha3 !== 'Sim' || escolha3 !== 's' || escolha3 !== 'S' || escolha3 !== 'nao'|| escolha3 !== 'Nao' || escolha3 !== 'Não' || escolha3 !== 'n' || escolha3 !== 'N' ){
        escolha3 = prompt('Viktor precisa de Jayce para concluir seu projeto ambicioso, mas acredita que ele deve prosseguir e contatar o aluno expulso pelo conselho?\n\n1.Sim, só assim ele pode realizar o projeto.\n2.Não, ele não deve se meter nessa historia.')

        if(escolha3 === 'sim' || escolha3 === 'Sim' || escolha3 === 's' || escolha3 === 'S'){
            window.location.href = '../../htmls/Viktor/escolha3-viktor.html'
            break
        }else if(escolha3 === 'nao' || escolha3 === 'Nao' || escolha3 === 'Não' || escolha3 === 'Não' || escolha3 === 'n' || escolha3 === 'N' ){
            window.location.href = '../../htmls/Viktor/give-up3.html'
            break
        }else{
            alert('Escolha inválida')
        }
    }
}

function escolherSimouNao3 (escolha4){

    while(escolha4 !== 'sim' || escolha4 !== 'Sim' || escolha4 !== 's' || escolha4 !== 'S' || escolha4 !== 'nao' || escolha4 !== 'Nao' || escolha4 !== 'Não' || escolha4 !== 'n' || escolha4 !== 'N' ){

        escolha4 = prompt('Viktor precisa de Jayce, mas a escolha é sua, acredita que deve impedir Jayce de seu possível suicídio?\n\n1.Sim, ele é um jovem muito promissor\n2.Não, a escolha é dele')

        if(escolha4 === 'sim' || escolha4 === 'Sim' || escolha4 === 's' || escolha4 === 'S'){
            window.location.href = '../../htmls/Viktor/fim-viktor.html'
            break
        }else if(escolha4 === 'nao' || escolha4 === 'Nao' || escolha4 === 'Não' || escolha4 === 'Não' || escolha4 === 'n' || escolha4 === 'N' ){
            window.location.href = '../../htmls/Viktor/give-up4.html'
            break
        }else{
            alert('Escolha inválida')
        }
    }
}

function jogarNovamente(replay){

    replay = window.location.href = '../../htmls/escolhas.html'

}