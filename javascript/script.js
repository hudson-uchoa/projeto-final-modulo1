function escolher (personagem){

    personagem = prompt ('Qual personagem você escolhe?');
    
    if(personagem === 'Heimerdinger' || personagem === 'Heimer' || personagem === 'heimer' || personagem === 'heimerdinger'){
        window.location.href = '../htmls/Heimer/escolha-heimer.html'
    }else if(personagem === 'Jayce' || personagem === 'jayce'){
        window.location.href = '../htmls/Jayce/escolha-jayce.html'
    }else if(personagem === 'Viktor' || personagem === 'viktor'){
        window.location.href = '../htmls/Viktor/escolha-viktor.html'
    }else{
        alert('Personagem inválido')
    }
}
