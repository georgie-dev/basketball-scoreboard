let timer= document.getElementById("clockBox");
let home=document.getElementById("homescore");
let away=document.getElementById("awayscore");

let homeS=Number.parseInt(home.innerHTML,10);
let awayS=Number.parseInt(away.innerHTML,10)


//buttons to Add away Score
document.getElementById("aone").addEventListener('click',()=>{
    let d= away.innerHTML;
  let e= Number.parseInt(d,10);
away.innerHTML=e+1
})
document.getElementById("atwo").addEventListener('click',()=>{
    let d=away.innerHTML;
  let e= Number.parseInt(d,10);
  away.innerHTML=e+2
})
document.getElementById("athree").addEventListener('click',()=>{
    let d= away.innerHTML;
  let e= Number.parseInt(d,10);
  away.innerHTML=e+3
})
document.getElementById("aminus").addEventListener('click',()=>{
    let d= away.innerHTML;
  let e= Number.parseInt(d,10);
  away.innerHTML=e-1
})
 //buttons to add Home Score
document.getElementById("hone").addEventListener('click',()=>{
    let d= home.innerHTML;
  let e= Number.parseInt(d,10);
 home.innerHTML=e+1
})
document.getElementById("htwo").addEventListener('click',()=>{
    let d= home.innerHTML;
  let e= Number.parseInt(d,10);
  home.innerHTML=e+2
})
document.getElementById("hthree").addEventListener('click',()=>{
    let d=home.innerHTML;
  let e= Number.parseInt(d,10);
  home.innerHTML=e+3
})
document.getElementById("hminus").addEventListener('click',()=>{
    let d= home.innerHTML;
  let e= Number.parseInt(d,10);
  home.innerHTML=e-1
})


//new game button
document.getElementById("restart").addEventListener('click', ()=>{
    away.innerHTML=0
    home.innerHTML=0
    timer.innerHTML = "00:00";
    stoptime = true;
    sec = "00";
    min = "00";
    timer.style.color="white"
})


//timer
let counter= setInterval("timerCycle()", 1000)
let min = "00"
let sec = "00";
let stoptime = true;
document.getElementById("stop").addEventListener("click",()=>{
    stoptime=true
    timer.innerHTML="00:00"
    sec = "00";
    min = "00";
    timer.style.color="white"
})


function timerCycle() {
    if (stoptime == false) {
    sec = Number.parseInt(sec);
    min = Number.parseInt(min);

    sec += 1;
    if (sec == 60) {
      min +=1;
      sec = 0;
    }
    if(min==12 && sec==0){
        stoptime=true
        sec = 0
        min = 0;
    }
  
    if(min==11 && sec>=36){
        timer.style.color="gold"
    }
    if(min==11 && sec>=50){
        timer.style.color="red"
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
  }

  timer.innerHTML = `${min}:${sec}`
}
document.getElementById("play").addEventListener("click",()=>{
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
})
document.getElementById("pause").addEventListener('click', ()=>{
    if (stoptime == false) {
        stoptime = true;
      }
})
