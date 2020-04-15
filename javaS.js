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
        return {'message': '_Draw','color':'yellow'};

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
    var buttonDiv=document.createElement('div');

    humanDiv.innerHTML="<img id='rock1' src='"+imgData[myPicChoice]+"' height=200 width=150 style='box-shadow:0px 10px 50px #82ff69;border-radius: 30px; background-color:#82ff69;position: fixed;top: 250px;left: 20%;'>"
    document.getElementById("game").appendChild(humanDiv);

    messageDiv.innerHTML="<h1 id='scissor1' style='color:" + msg['color'] + "; font-size:50px; padding: 20px; text-shadow: 3px 5px 10px #ffffff;position: fixed;top: 300px;left: 42%'>"+msg['message']+ "</h1>";
    document.getElementById("game").appendChild(messageDiv);

    botDiv.innerHTML="<img id='paper1' src='"+imgData[botPicChoice]+"' height=200 width=150 style='box-shadow:0px 10px 50px #ff0000;background-color:#ff0000;border-radius: 30px;position: fixed;top: 250px;left: 64%;'>"
    document.getElementById("game").appendChild(botDiv);

    buttonDiv.innerHTML="<button id='button1' onclick='onceAgain()' style = ' margin-top:280px'>" +'PLAY AGAIN' + "</button>"
    document.getElementById("butt").appendChild(buttonDiv);
}
function onceAgain(){
    document.getElementById('rock1').remove();
    document.getElementById('scissor1').remove();
    document.getElementById('paper1').remove();
    document.getElementById('button1').remove();

    var rock2=document.createElement('div');
    var scissor2=document.createElement('div');
    var paper2=document.createElement('div');

    rock2.innerHTML="<img src='  https://pngimage.net/wp-content/uploads/2018/06/rock-cartoon-png-6.png 'style = ' position: fixed;top: 250px;left: 20%;' id='rock' onclick='rpsgame(this)'>"
    document.getElementById("game").appendChild(rock2);
    scissor2.innerHTML="<img src=' https://pngimage.net/wp-content/uploads/2018/06/scissors-cartoon-png-3.png ' style = ' position: fixed;top: 250px;left: 43%' id='scissor' onclick='rpsgame(this)'>"
    document.getElementById("game").appendChild(scissor2);
    paper2.innerHTML="<img src='https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-005-512.png ' style = ' position: fixed;top: 250px;left: 66%'  id='paper' onclick='rpsgame(this)'>"
    document.getElementById("game").appendChild(paper2);

}

//position: fixed;top: 32%;left: 66%;
//position: fixed;top: 32%;left: 20%;
//position: fixed;top: 32%;left: 43%
