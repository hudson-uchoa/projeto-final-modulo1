function jogar (escolha1){

    escolha1 = prompt(' "Foi um dia agitado..." você pensa, logo após presenciar o que talvez seria um futuro projeto a se desenvolver "tecnologia com mágia?", talvez uma outrora pensasse ser uma ideia ridicula, mas naquele momento não era, nada tirava isso de sua cabeça, nem mesmo sua assistente que vivia com ídeias merabulantes que talvez fossem promissoras. Então você pensa em fazer uma escolha que pode mudar sua vida para sempre, mas ainda não está convicto, afinal, é uma importante escolha.\n Agora é com você jogador, ele deve seguir adiante com essa ideia?\n\n1.Sim\n2.Não')

    if(escolha1 === 'sim' || escolha1 === 'Sim' || escolha1 === 's' || escolha1 === 'S'){
        window.location.href = '../htmls/escolha1-viktor.html'
    }else if(escolha1 === 'nao' || escolha1 === 'Nao' || escolha1 === 'Não' || escolha1 === 'Não' || escolha1 === 'n' || escolha1 === 'N' ){
        window.location.href = '../htmls/give-up1.html'
    }else{
        alert('Escolha inválida')
    }
}