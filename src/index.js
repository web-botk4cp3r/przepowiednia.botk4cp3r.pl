let listaWymowek = [
    "jg diff",
    "supp diff",
    "lepiej main conent i next q bo teraz kurwy same",
    "100% chatowników to r......",
    "lepiej graj w dotę2 bo i tak nie wbijesz rank 1",
    "-27lp",
    "leki",
    "afk w jednym z teamów ale to 50/50",
    "free win (z niemieckiego frai a francuskiego friś)",
    "dzisiaj climbujesz !!!! dzisiaj g1",
    "lulu tu siedzi",
    "dzisiaj musisz zagrać heimerem",
    "9v1",
    "1v9",
    "supp gap",
    "tiktoczki",
    "botk4cp3r powinien otrzymać rangę vip na kanale twitch.tv/kaseko",
    "widz ma sprawę wagi światowej",
    "czas na epala",
    "ktoś na chacie ma bardzo dużego chuja"
];

console.log(listaWymowek.length)

let button = document.querySelector(".gamba-button");
let wymowki = document.querySelector(".wymowki");
let winner= document.querySelector(".winner");
let losAgain = document.querySelector(".los-next");
let cooldown = 0;
let listaWymowekCount = listaWymowek.length;
let winnerMsg="";
let result = document.querySelector("#wymowka");
let losersAll=document.querySelectorAll(".gamba-el");
let copy = document.querySelector(".los-copy");

function losuj(){
    let x;
    let y=0;
    for(x=0;x<20;x++){
        y=Math.floor(Math.random() * listaWymowekCount);
        if(x!=18){
            losersAll[x].innerHTML=listaWymowek[y];
        }
        else{
            losersAll[x].innerHTML=listaWymowek[y];
            winnerMsg=listaWymowek[y];
        }
        //if(y==54){console.log(y);};
    }
    result.innerHTML=winnerMsg;
}
losuj();

button.addEventListener('click',  async function(){
    button.classList.toggle("gamba-button-click");
    setTimeout(function(){
        button.classList.toggle("gamba-button-click");
    },200);
});
function StartCooldown(){
    console.log("nie tak szybko kurwa...");
    setTimeout(function(){cooldown=0},6000);
}
button.addEventListener('click', async function(){
        if(cooldown === 0){
            wymowki.classList.toggle("wymowki-done");
            cooldown = 1; 
            StartCooldown();
            setTimeout(function(){winner.classList.toggle("winner-picked");},5000);
        }
});

losAgain.addEventListener("click", function(){
    winner.classList.toggle("winner-picked");
    wymowki.classList.remove("wymowki-done");
    setTimeout(function(){losuj();},250)
    
});
