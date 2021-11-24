function escolher (personagem){

    personagem = prompt ('Qual personagem você escolhe?');
    
    if(personagem === 'Heimerdinger' || personagem === 'Heimer' || personagem === 'heimer' || personagem === 'heimerdinger'){
        alert('Lembrando que você jogador terá de fazer escolhas durante toda jornada do personagem. \n Digite apenas "Sim" ou "Não" durante todo o jogo')
        window.location.href = '../htmls/Heimer/escolha-heimer.html'
    }else if(personagem === 'Jayce' || personagem === 'jayce'){
        alert('Lembrando que você jogador terá de fazer escolhas durante toda jornada do personagem. \n Digite apenas "Sim" ou "Não" durante todo o jogo')
        window.location.href = '../htmls/Jayce/escolha-jayce.html'
    }else if(personagem === 'Viktor' || personagem === 'viktor'){
        alert('Lembrando que você jogador terá de fazer escolhas durante toda jornada do personagem. \n Digite apenas "Sim" ou "Não" durante todo o jogo')
        window.location.href = '../htmls/Viktor/escolha-viktor.html'
    }else{
        alert('Personagem inválido')
    }
}
