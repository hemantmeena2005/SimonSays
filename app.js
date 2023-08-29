let body =document.querySelector('body');
//start  key press
let gamesequence=[];
let usersequence=[];
let buttons = ['red','yellow','purple','green'];
let high  =[];

let start = false;
let level  =0;
let h3 = document.querySelector('h3');

//step1
document.addEventListener('keypress',function(){
    if(start==false){
        // console.log('game started');
        start = true;
        levelup();
    }
})

//step2
function buttonflash(btn){
    // console.log(btn);
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
    // console.log('buttoon flased');
}
function levelup(){
    usersequence =[];
    level++;
    h3.innerText = 'Level ' + level;
    //random button
    let randomidx = Math.floor(Math.random()*3);
    let randomcolor  = buttons[randomidx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    // console.dir(randombtn);
    // console.log(randomcolor);
    // console.log(randomidx);
    gamesequence.push(randomcolor);
    console.log(gamesequence);
    buttonflash(randombtn);
}

//step 3
function btnclicked(btn){
    btn.classList.add('click');
    setTimeout(function(){
        btn.classList.remove('click')
    },100);
}
let btns = document.querySelectorAll('.button')
function btnpress (){
    // console.log(this);
    let btn   = this;
    btnclicked(btn);
    let color = btn.getAttribute('id');
    usersequence.push(color);
    // console.log(usersequence);
    // usersequence.add(btn);
    // console.log('btn pressed');
    check(usersequence.length-1);
}
for(btn of btns){
    btn.addEventListener('click',btnpress);
}

function check(idx){
    // console.log(level);
    //  idx= level-1;
    if(gamesequence[idx]===usersequence[idx]){
        if(gamesequence.length==usersequence.length){
            setTimeout(levelup,500)
        }
        else {

        }
        // console.log('same value');
    }
    else{
        high.push(level);
        h3.innerHTML = `Game Over! . Your score was <b>${level}</b>.<br> Press any key to Restart the game`;
        let max =0;
        for(let i=0;i<high.length;i++){
            if(max<high[i]){
                max = high[i];
            }
        }
        // let h2 = document.createElement('h2');
        // let body = document.querySelectorAll('body');
        // body.appendChild(h2);
        let h2  =document.querySelector('h2');
        h2.innerText = `Highest Score : ${max}`;
        reset();
        wrong();
        // console.log('game over');
    }
}

function reset(){
    start  =false;
    level =0;
    usersequence =[];
    gamesequence = [];
}
function wrong(){
    body.classList.add('wrong');
    setTimeout(function(){
        body.classList.remove('wrong')
    },100);
}