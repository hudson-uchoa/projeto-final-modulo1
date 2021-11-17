function escolher (){

    var personagem = prompt ('Qual personagem você escolhe?')

    if(personagem === 'Heimerdinger' || personagem === 'Heimer' || personagem === 'heimer' || personagem === 'heimerdinger'){
        window.location.href = '../htmls/escolha-heimer.html'
    }else if(personagem === 'Jayce' || personagem === 'jayce'){
        window.location.href = '../htmls/escolha-jayce.html'
    }else if(personagem === 'Viktor' || personagem === 'viktor'){
        window.location.href = '../htmls/escolha-viktor.html'
    }
}