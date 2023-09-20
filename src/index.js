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
    "widz ma sprawę wagi światowej",
    "botk4cp3r powinien otrzymać rangę vip na kanale twitch.tv/kaseko",
    "czas na epala",
    "ktoś na chacie ma bardzo dużego chuja"
];

console.log(listaWymowek.length)

let button = document.querySelector(".gamba-button");
let wymowki = document.querySelector(".wymowki");
let winner = document.querySelector(".winner");
let losAgain = document.querySelector(".los-next");
let cooldown = 0;
let animating = false;
let listaWymowekCount = listaWymowek.length;
let losersAll = document.querySelectorAll(".gamba-el");
let copy = document.querySelector(".los-copy");

function losuj() {
    if (animating) return;
    animating = true;

    let x;
    for (x = 0; x < 20; x++) {
        let y = Math.floor(Math.random() * listaWymowekCount);
        if (x !== 14) {
            losersAll[x].innerHTML = listaWymowek[y];
        }
    }

    setTimeout(function () {
        animating = false;
    }, 5000);
}

losuj();

button.addEventListener('click', function () {
    button.classList.toggle("gamba-button-click");
    const buttonsToRemove = document.querySelectorAll('.gamba-button, .gamba-button-3d');
    
    buttonsToRemove.forEach(function (button) {
        button.remove();
    });
    setTimeout(function () {
        button.classList.toggle("gamba-button-click");
    }, 200);
});

function StartCooldown() {
    console.log("nie tak szybko kurwa...");
    setTimeout(function () {
        cooldown = 0;
    }, 6000);
}

button.addEventListener('click', function () {
    if (cooldown === 0) {
        wymowki.classList.toggle("wymowki-done");
        cooldown = 1;
        StartCooldown();
        losuj();
    }
});

losAgain.addEventListener("click", function () {
    if (!animating) {
        winner.classList.toggle("winner-picked");
        wymowki.classList.remove("wymowki-done");
        losuj();
    }
});