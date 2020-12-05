var scores = [0,0];
//coucou
var playerActivity= 0;
var roundScore = 0 ;    


document.querySelector('.dice').style.display = 'none';

document.getElementById('score--0').textContent = '0';
document.getElementById('score--1').textContent = '0';

document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.querySelector('#btn-roll').addEventListener('click', function(){
    
    //RANDOM NUMBER
    var dice = Math.floor(Math.random * 6) + 1;
    // DISPLAY RESULT
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    //diceDOM.src = 'dice' + dice +'.png';
    
    // condition
    if (dice > 1){ 
        roundScore = roundScore+dice;
        document.getElementById('current--'+playerActivity).textContent = roundScore;
        }
    else {
        
        playerActivity === 0 ? playerActivity =1 : playerActivity = 0 ;
        
        roundScore = 0;
        
        document.querySelector('#current--0').textContent = 0
        document.querySelector('#current--1').textContent = 0
        
        document.querySelector('.player--0').classList.remove('active');
        
        document.querySelector('.player--1').classList.add('active');
    }
    
})


 document.querySelector("#btn-hold").addEventListener("click", function(){
     scores[playerActivity] += roundScore;
     
     document.querySelector('score--'+playerActivity).textContent = scores[playerActivity];
 })













