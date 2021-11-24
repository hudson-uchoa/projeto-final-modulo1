function jogar (escolha1){

    while(escolha1 !== 'sim' || escolha1 !== 'Sim' || escolha1 !== 's' || escolha1 !== 'S' || escolha1 !== 'nao' || escolha1 !== 'Nao' || escolha1 !== 'Não' || escolha1 !== 'n' || escolha1 !== 'N' ){

        escolha1 = prompt(' "Poxa vida, será que nunca vou ter tempo para ajustar minhas invenções antes que alguém venha trazer péssimas noticias?" Heimer diz para Viktor, que acaba de trazer a noticia sobre um acidente envolvendo "pedras mágicas", "Seu nome é Jayce, professor" diz Viktor, "ele é um aluno da academia","Esse nome não me é estranho" diz Heimer, "não é aquele aluno que gosta de martelos? E que criou um reator de plasma com apenas algumas ferramentas?", "sim, ele mesmo professor Heimer" diz Viktor, "ele é um jovem muito promissor, uma pena estar mechendo com o que não conhece", "pelo contrário, professor, ele sabia muito bem com o que estava mechendo." Viktor diz, entregando um livro com capa de couro e com um simbolo de martelo cravado em sua capa, Heimer então abre e vê diversas anotações, todas assinadas por Jayce em cada página, Heimer então tem uma lembrança, uma lembrança nada amigável, ele lembra de um homem que foi tomado pela ambição e a ganância, um homem que só queria poder e que quase transformou o mundo em ruínas só para consegir isso. Então você sente que precisa tomar uma decisão, para salvar a cidade desse tipo de pessoa. \n Jogador, Heimer deseja muito falar com Jayce sobre isso, acha que ele deve ajudar Jayce a quem sabe escapar de uma punição mais severa?\n\n1. Sim, ele deve falar com Jayce antes do julgamento.\n2. Não, ele não deve interferir.')

        if(escolha1 === 'sim' || escolha1 === 'Sim' || escolha1 === 's' || escolha1 === 'S'){
            window.location.href = '../../htmls/Heimer/escolha1-heimer.html'
            break
        }else if(escolha1 === 'nao' || escolha1 === 'Nao' || escolha1 === 'Não' || escolha1 === 'Não' || escolha1 === 'n' || escolha1 === 'N' ){
            window.location.href = '../../htmls/Heimer/give-up1.html'
            break
        }else{
            alert('Escolha inválida')
        }
        
    }
}

function escolherSimouNao (escolha2){

    while(escolha2 !== 'sim' || escolha2 !== 'Sim' || escolha2 !== 's' || escolha2 !== 'S' || escolha2 !== 'nao' || escolha2 !== 'Nao' || escolha2 !== 'Não'|| escolha2 !== 'n' || escolha2 !== 'N' ){

        escolha2 = prompt('Heimer deve comparecer ao julgamento, como peça fundamental para ajudar Jayce a não ter a punição mais severa?\n\n1.Sim, ele deve ir e também ouvir o que Jayce tem a dizer.\n2.Não, ele deve ignorar.')

        if(escolha2 === 'sim' || escolha2 === 'Sim' || escolha2 === 's' || escolha2 === 'S'){
            window.location.href = '../../htmls/Heimer/escolha2-heimer.html'
            break
        }else if(escolha2 === 'nao' || escolha2 === 'Nao' || escolha2 === 'Não' || escolha2 === 'Não' || escolha2 === 'n' || escolha2 === 'N' ){
            window.location.href = '../../htmls/Heimer/give-up2.html'
            break
        }else{
            alert('Escolha inválida')
        }
    }
}

function escolherSimouNao2 (escolha3){

    while(escolha3 !== 'sim' || escolha3 !== 'Sim' || escolha3 !== 's' || escolha3 !== 'S' || escolha3 !== 'nao'|| escolha3 !== 'Nao' || escolha3 !== 'Não' || escolha3 !== 'n' || escolha3 !== 'N' ){
        escolha3 = prompt('Acha que deve ajudar o conselho decidir uma punição menos severa para Jayce, e ele ser apenas expulso da academia ou quer expulsa-lo da cidade?\n\n1.Sim, ajudar Jayce.\n2.Não, Jayce deve ser expulso.')

        if(escolha3 === 'sim' || escolha3 === 'Sim' || escolha3 === 's' || escolha3 === 'S'){
            window.location.href = '../../htmls/Heimer/escolha3-heimer.html'
            break
        }else if(escolha3 === 'nao' || escolha3 === 'Nao' || escolha3 === 'Não' || escolha3 === 'Não' || escolha3 === 'n' || escolha3 === 'N' ){
            window.location.href = '../../htmls/Heimer/give-up3.html'
            break
        }else{
            alert('Escolha inválida')
        }
    }
}

function escolherSimouNao3 (escolha4){

    while(escolha4 !== 'sim' || escolha4 !== 'Sim' || escolha4 !== 's' || escolha4 !== 'S' || escolha4 !== 'nao' || escolha4 !== 'Nao' || escolha4 !== 'Não' || escolha4 !== 'n' || escolha4 !== 'N' ){

        escolha4 = prompt('Acha que Heimer deve ir investigar?\n\n1.Sim, parece algum intruso.\n2.Não, deve ser apenas um rato.')

        if(escolha4 === 'sim' || escolha4 === 'Sim' || escolha4 === 's' || escolha4 === 'S'){
            window.location.href = '../../htmls/Heimer/fim-heimer.html'
            break
        }else if(escolha4 === 'nao' || escolha4 === 'Nao' || escolha4 === 'Não' || escolha4 === 'Não' || escolha4 === 'n' || escolha4 === 'N' ){
            alert('Mas isso te deixa inquieto, você não consegue simplesmente deixar pra lá e precisa investigar.')
            window.location.href = '../../htmls/Heimer/fim-heimer.html'
            break
        }else{
            alert('Escolha inválida')
        }
    }
}

function jogarNovamente(replay){

    replay = window.location.href = '../../htmls/escolhas.html'

}