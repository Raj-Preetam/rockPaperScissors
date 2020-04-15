function rpsgame(choice)
{
    
    var human,bot;
   human=choice.id;
    bot=numberToChoice(Random());
    console.log(human,bot)
    results=whoIsWinner(human,bot);
    console.log(results);
    printing=printout(results);
    console.log(printing);
    frontend(human,bot,printing);
}
function Random()
{
    return Math.floor(Math.random()*3); //math.random generates a random decimal number between 0 and 1 and,,,,,,math.floor chops off the decimal part
}                                     //multiplying by 3, we get random numbers betn 0 and 3 and .floor chops off the decimal...so we get numbers 0,1 and 2,,,randomly
function numberToChoice(number)
{
    return ['rock','paper','scissor'][number]
}
function whoIsWinner(myChoice,compChoice)
{
    var database={
        'rock':{'rock':0.5,'scissor':1,'paper':0},
        'paper':{'rock':1,'scissor':0,'paper':0.5},
        'scissor':{'rock':0,'scissor':0.5,'paper':1}
    }
    var myScore=database[myChoice][compChoice];
    var compScore=database[compChoice][myChoice];
    return [myScore,compScore];
}
function printout(arr)
{
    if(arr[0]==0)
    {
        return {'message': 'You lost','color':'red'};
    }
    else if(arr[0]==0.5)
    {
        return {'message': 'Draw','color':'yellow'};

    }
    else if(arr[0]==1){
        return {'message': 'You won','color':'#77ff41'};
    }
}
function frontend(myPicChoice,botPicChoice,msg)
{
    var imgData={
        'rock':document.getElementById('rock').src,
        'scissor':document.getElementById('scissor').src,
        'paper':document.getElementById('paper').src
    }
    document.getElementById('rock').remove();
    document.getElementById('scissor').remove();
    document.getElementById('paper').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='"+imgData[myPicChoice]+"' height=200 width=150 style='box-shadow:0px 10px 50px #82ff69;border-radius: 30px; background-color:#82ff69'>"
    document.getElementById("game").appendChild(humanDiv);

    messageDiv.innerHTML="<h1 style='color:" + msg['color'] + "; font-size:50px; padding: 20px; text-shadow: 3px 5px 10px #ffffff'>"+msg['message']+ "</h1>";
    document.getElementById("game").appendChild(messageDiv);

    botDiv.innerHTML="<img src='"+imgData[botPicChoice]+"' height=200 width=150 style='box-shadow:0px 10px 50px #ff0000;background-color:#ff0000;border-radius: 30px;'>"
    document.getElementById("game").appendChild(botDiv);
}