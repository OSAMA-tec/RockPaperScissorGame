


const randomvalue=(hand)=>{
    const values=(Math.floor(Math.random()*hand.length));
    return hand[values];
}

const values=['Rock','Paper','Scissor'];
const hands=document.querySelectorAll('.rpsButton');
let score=0;
hands.forEach(hand=>{
    hand.onclick=()=>{
        let computerValue=randomvalue(values);
        if(hand.value=='Rock'&&computerValue=='Paper'){
            score-=1;
            document.getElementById('player-score').innerText=score;
            document.getElementById('hands').innerText=hand.value+" vs "+computerValue;
            document.getElementById('result').innerText="You Loose!"
        }
        else if(hand.value=='Rock'&&computerValue=='Scissor'){
            score+=1;
            document.getElementById('player-score').innerText=score;
            document.getElementById('hands').innerText=hand.value+" vs "+computerValue;
            document.getElementById('result').innerText="You Win!"
        }
        else if(hand.value=='Rock'&&computerValue=='Rock'){
            document.getElementById('player-score').innerText=score;
            document.getElementById('hands').innerText=hand.value+" vs "+computerValue;
            document.getElementById('result').innerText="Draw!"
        }
        else if(hand.value=='Scissor'&&computerValue=='Rock'){
            score-=1;
            document.getElementById('player-score').innerText=score;
            document.getElementById('hands').innerText=hand.value+" vs "+computerValue;
            document.getElementById('result').innerText="You Loose!"
        }
        else if(hand.value=='Scissor'&&computerValue=='Paper'){
            score+=1;
            document.getElementById('player-score').innerText=score;
            document.getElementById('hands').innerText=hand.value+" vs "+computerValue;
            document.getElementById('result').innerText="You Win!"
        }
        else if(hand.value=='Scissor'&&computerValue=='Scissor'){
            document.getElementById('player-score').innerText=score;
            document.getElementById('hands').innerText=hand.value+" vs "+computerValue;
            document.getElementById('result').innerText="Draw!"
        }
        else if(hand.value=='Paper'&&computerValue=='Rock'){
            score+=1;
            document.getElementById('player-score').innerText=score;
            document.getElementById('hands').innerText=hand.value+" vs "+computerValue;
            document.getElementById('result').innerText="You Win!"
        }
        else if(hand.value=='Paper'&&computerValue=='Scissor'){
            score-=1;
            document.getElementById('player-score').innerText=score;
            document.getElementById('hands').innerText=hand.value+" vs "+computerValue;
            document.getElementById('result').innerText="You Loose!"
        }
        else if(hand.value=='Paper'&&computerValue=='Paper'){
 
            document.getElementById('player-score').innerText=score;
            document.getElementById('hands').innerText=hand.value+" vs "+computerValue;
            document.getElementById('result').innerText="Draw!"
        }
    }
    // For Finishing Everything    ||  Slearing Data
    const clear=document.getElementById('endGameButton');
    clear.onclick=()=>{
        score=0;
        document.getElementById('player-score').innerText=' ';
        document.getElementById('hands').innerText=' ';
        document.getElementById('result').innerText=' ';
    }
})