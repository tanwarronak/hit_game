let ball = "";
let rn = 0;
let hit = 0;
let timing = 60;
let score = 0;

function bowler(){
for(let i = 0;i<=163;i++){
    rn = Number(Math.floor(Math.random()*10));
    ball +=  `<div id="buble">${rn}</div>`
}
document.querySelector("#screen").innerHTML =  ball;
}

function hitme(){
    hit = Number(Math.floor(Math.random()*10));
    document.querySelector("#hitme").textContent = hit;

}

function timer(){
    setInterval(() => {
        if(timing>0){
            timing--;
            document.querySelector("#timeup").innerHTML = timing;
        }
        else{
            clearInterval();
            document.querySelector("#screen").innerHTML = `<h1>GAME OVER</h1>`;
        }
       
    }, 1000);
}

function tab(){
    document.querySelector("#screen")
    .addEventListener("click",(dets)=>{
          var check = Number(dets.target.textContent);
          if(check===hit){
            scoreup();
            hitme();
        }
    })
}
   
    

function scoreup(){
    score += 10
    document.querySelector("#score").textContent = score;
}




bowler();
hitme();
timer();
tab();

