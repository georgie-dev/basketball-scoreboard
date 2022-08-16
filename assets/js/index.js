let timer= document.getElementById("clockBox");
let home=document.getElementById("homescore");
let away=document.getElementById("awayscore");



//buttons to Add away Score
document.getElementById("aone").addEventListener('click',()=>{
  localStorage.setItem("awayScore", JSON.stringify(away.innerHTML))
  let d= JSON.parse(localStorage.getItem("awayScore"));
  let e= Number.parseInt(d,10);
  away.innerHTML=e+1;
  localStorage.setItem("awayScore", JSON.stringify(away.innerHTML))
})
document.getElementById("atwo").addEventListener('click',()=>{
  localStorage.setItem("awayScore", JSON.stringify(away.innerHTML))
  let d= JSON.parse(localStorage.getItem("awayScore"));
  let e= Number.parseInt(d,10);
  away.innerHTML=e+2;
  localStorage.setItem("awayScore", JSON.stringify(away.innerHTML))
})
document.getElementById("athree").addEventListener('click',()=>{
  localStorage.setItem("awayScore", JSON.stringify(away.innerHTML))
  let d= JSON.parse(localStorage.getItem("awayScore"));
  let e= Number.parseInt(d,10);
  away.innerHTML=e+3;
  localStorage.setItem("awayScore", JSON.stringify(away.innerHTML))
})
document.getElementById("aminus").addEventListener('click',()=>{
  localStorage.setItem("awayScore", JSON.stringify(away.innerHTML))
  let d= JSON.parse(localStorage.getItem("awayScore"));
  let e= Number.parseInt(d,10);
  away.innerHTML=e-1;
  localStorage.setItem("awayScore", JSON.stringify(away.innerHTML))
})
 //buttons to add Home Score
document.getElementById("hone").addEventListener('click',()=>{
  localStorage.setItem("homeScore", JSON.stringify(home.innerHTML))
  let d= JSON.parse(localStorage.getItem("homeScore"));
  let e= Number.parseInt(d,10);
  console.log(d)
  home.innerHTML=e+1;
  localStorage.setItem("homeScore", JSON.stringify(home.innerHTML))
})
document.getElementById("htwo").addEventListener('click',()=>{
  localStorage.setItem("awayScore", JSON.stringify(away.innerHTML))
  let d= JSON.parse(localStorage.getItem("homeScore"));
  let e= Number.parseInt(d,10);
  home.innerHTML=e+2;
  localStorage.setItem("homeScore", JSON.stringify(home.innerHTML))
})
document.getElementById("hthree").addEventListener('click',()=>{
  localStorage.setItem("awayScore", JSON.stringify(away.innerHTML))
  let d= JSON.parse(localStorage.getItem("homeScore"));
  let e= Number.parseInt(d,10);
  home.innerHTML=e+3;
  localStorage.setItem("homeScore", JSON.stringify(home.innerHTML))
})
document.getElementById("hminus").addEventListener('click',()=>{
  localStorage.setItem("awayScore", JSON.stringify(away.innerHTML))
  let d= JSON.parse(localStorage.getItem("homeScore"));
  let e= Number.parseInt(d,10);
  home.innerHTML=e-1;
  localStorage.setItem("homeScore", JSON.stringify(home.innerHTML))
})

away.innerHTML=JSON.parse(localStorage.getItem("awayScore")) || 0;
home.innerHTML=JSON.parse(localStorage.getItem("homeScore")) || 0;


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
let min = JSON.parse(localStorage.getItem("mintimer")) || "00";
let sec = JSON.parse(localStorage.getItem("sectimer")) || "00";
let stoptime = true;
let counter= setInterval("timerCycle()", 1000)

//timer stopper
document.getElementById("stop").addEventListener("click",()=>{
    stoptime=true
    timer.innerHTML="00:00"
    sec = "00";
    min = "00";
    timer.style.color="white"
})


function timerCycle() {
    if (stoptime == false ) {
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
  localStorage.setItem("mintimer", JSON.stringify(min))
  localStorage.setItem("sectimer", JSON.stringify(sec))
  timer.innerHTML = `${JSON.parse(localStorage.getItem("mintimer"))}:${JSON.parse(localStorage.getItem("sectimer"))}`
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
