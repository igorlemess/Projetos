function getComputerChoice(){
    let esc = Math.floor(Math.random() * 3)

    switch(esc){
        case 0:
            return 'papel';
            break;
        case 1:
            return 'pedra';
            break;
        case 2:
            return 'tesoura';
            break;
    }
}

function playRound(playerSelection, computerSelection) {

        

        if(playerSelection == computerSelection)
        {
            return "Empate"
        }
        else if(playerSelection == 'pedra' &&  computerSelection == 'papel')
        {   
            return "computador"
        }
        else if(playerSelection == 'pedra' &&  computerSelection == 'tesoura')
        {   
            return "player"
        }
        else if(playerSelection == 'tesoura' &&  computerSelection == 'papel')
        {   
            return "player"
        }
        else if(playerSelection == 'tesoura' &&  computerSelection == 'pedra')
        {   
            return "computador"
        }
        else if(playerSelection == 'papel' &&  computerSelection == 'tesoura')
        {   
            return "computador"
        }
        else if(playerSelection == 'papel' &&  computerSelection == 'pedra')
        {   
            return "player"
        } 
}

function game(){
    var pcomputador = 0,pplayer = 0;

    for(let i = 0; i <=4 ; i++)
    {
        let playerChoice = (prompt("Pedra, Papel ou Tesoura ?")).toLowerCase();
        const playerSelection = playerChoice;
        const computerSelection = getComputerChoice();

        if((playRound(playerSelection, computerSelection) == "player"))
        {
            pplayer++
            alert("Computador:" + pcomputador +"\n Você: " + pplayer + "\n\nVocê venceu");          
        }
        else if((playRound(playerSelection, computerSelection) == "computador"))
        {
            pcomputador++
            alert("Computador:" + pcomputador +"\n Você: " + pplayer + "\n\nComputador venceu");
        }
        else
        {
            alert("Empate");
        }
        
        console.log(playerSelection)
        console.log(computerSelection)
    }
}

game();