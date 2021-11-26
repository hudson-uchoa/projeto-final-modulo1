function jogar (escolha1){

    while(escolha1 !== 'sim' || escolha1 !== 'Sim' || escolha1 !== 's' || escolha1 !== 'S' || escolha1 !== 'nao' || escolha1 !== 'Nao' || escolha1 !== 'Não' || escolha1 !== 'n' || escolha1 !== 'N' ){

        escolha1 = prompt(' "Que dia lindo!" ecoa em sua mente, quase que um grito, e o faz esboçar um lindo sorriso. O dia está maravilhoso e você está muito animado a continuar com sua pesquisa revolucionária, construir aquilo que um dia salvou sua vida e agora pode revolucionar a cidade é algo animador. Antes de ir ao corredor onde fica seu quarto, sua vizinha o acompanha e começa a falar um pouco sobre o dia, mesmo ouvindo o que ela tem a dizer você não se distrai e vai em direção ao seu quarto, quando está prestes a abrir a porta, ouve algumas vozes vindo de dentro do seu apartamento e se assusta... \n Jogador, ele deve abrir a porta? Ou então tentar escutar as vozes?\n\n1. Sim, ele deve abrir a porta.\n2. Não, ele deve apenas escutar.')

        if(escolha1 === 'sim' || escolha1 === 'Sim' || escolha1 === 's' || escolha1 === 'S'){
            alert('Você tenta abrir a porta, mas seus esforços são em vão, então você tenta arrombar com toda sua força, com a esperança que a porta ceda')
            window.location.href = '../../htmls/Jayce/escolha1-jayce.html'
            break
        }else if(escolha1 === 'nao' || escolha1 === 'Nao' || escolha1 === 'Não' || escolha1 === 'Não' || escolha1 === 'n' || escolha1 === 'N' ){
            alert('Você então decide ouvir, mas logo quando coloca seu ouvido na porta...\n Você ouve vozes que parecem ser de crianças, e também vê a silhuetas delas, então você tenta arrombar a porta... ')
            window.location.href = '../../htmls/Jayce/escolha1-jayce.html'
            break
        }else{
            alert('Escolha inválida')
        }
        
    }
}

function escolherSimouNao (escolha2){

    while(escolha2 !== 'sim' || escolha2 !== 'Sim' || escolha2 !== 's' || escolha2 !== 'S' || escolha2 !== 'nao' || escolha2 !== 'Nao' || escolha2 !== 'Não'|| escolha2 !== 'n' || escolha2 !== 'N' ){

        escolha2 = prompt('Jayce deve seguir seu instinto, talvez convencer os conselheiros de Piltover sobre seu ambicioso projeto? Ou apenas aceitar sua punição calado?\n\n1.Sim, ele deve se pronunciar diante dos conselheiros.\n2.Não, ele deve aceitar sua punição quieto.')

        if(escolha2 === 'sim' || escolha2 === 'Sim' || escolha2 === 's' || escolha2 === 'S'){
            window.location.href = '../../htmls/Jayce/escolha2-jayce.html'
            break
        }else if(escolha2 === 'nao' || escolha2 === 'Nao' || escolha2 === 'Não' || escolha2 === 'Não' || escolha2 === 'n' || escolha2 === 'N' ){
            window.location.href = '../../htmls/Jayce/give-up1.html'
            break
        }else{
            alert('Escolha inválida')
        }
    }
}

function escolherSimouNao2 (escolha3){

    while(escolha3 !== 'sim' || escolha3 !== 'Sim' || escolha3 !== 's' || escolha3 !== 'S' || escolha3 !== 'nao'|| escolha3 !== 'Nao' || escolha3 !== 'Não' || escolha3 !== 'n' || escolha3 !== 'N' ){
        escolha3 = prompt(' "Você sabe o que deve fazer, não é Jayce? Não há mais nenhuma opção. DESISTA"\n\n1.Sim, DESISTA.\n2.Não, Jayce, ainda há esperança.')

        if(escolha3 === 'sim' || escolha3 === 'Sim' || escolha3 === 's' || escolha3 === 'S'){
            window.location.href = '../../htmls/Jayce/escolha3-jayce.html'
            break
        }else if(escolha3 === 'nao' || escolha3 === 'Nao' || escolha3 === 'Não' || escolha3 === 'Não' || escolha3 === 'n' || escolha3 === 'N' ){
            alert('Ele não te ouve mais, jogador... Não há esperanças.')
            window.location.href = '../../htmls/Jayce/escolha3-jayce.html'
            break
        }else{
            alert('Escolha inválida')
        }
    }
}

function escolherSimouNao3 (escolha4){

    while(escolha4 !== 'sim' || escolha4 !== 'Sim' || escolha4 !== 's' || escolha4 !== 'S' || escolha4 !== 'nao' || escolha4 !== 'Nao' || escolha4 !== 'Não' || escolha4 !== 'n' || escolha4 !== 'N' ){

        escolha4 = prompt('Se jogar?\n\n1.Sim.\n2.Não.')

        if(escolha4 === 'sim' || escolha4 === 'Sim' || escolha4 === 's' || escolha4 === 'S'){
            window.location.href = '../../htmls/Jayce/preludio-jayce.html'
            break
        }else if(escolha4 === 'nao' || escolha4 === 'Nao' || escolha4 === 'Não' || escolha4 === 'Não' || escolha4 === 'n' || escolha4 === 'N' ){
            alert('Ele não te ouve, e então dá mais um passo...')
            window.location.href = '../../htmls/Jayce/preludio-jayce.html'
            break
        }else{
            alert('Escolha inválida')
        }
    }
}

function fimdeJogo (fim){
    fim = window.location.href = '../../htmls/Jayce/fim-jayce.html'
}

function jogarNovamente(replay){

    replay = window.location.href = '../../htmls/escolhas.html'

}