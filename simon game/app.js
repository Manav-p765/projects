let gameSeq = [];
let userSeq = [];
let highScore = 0;

let btns = ["red", "blue", "green", "yellow"];


let started = false;
let level = 0;

let h2 = document.querySelector('h3');

document.addEventListener('keypress', function () {
    if (started == false) {
        console.log("game has started");
        started = true;
    }
    levelUp();
});


function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function levelUp() {
    userSeq = []
    level++
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);

    gameSeq.push(randcolor);

    btnFlash(randBtn);
}

function ansCheck(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        } else {

        }
    } else {
        h2.innerHTML = `game over! you enetered wrong value.your score is <b>${level}</b>.<br>press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
        }, 250)
        highestScore(level);
        reset()
    }
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    usercolor = btn.getAttribute("id");

    userSeq.push(usercolor);
    ansCheck(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function highestScore(level) {
    if (level > highScore) {
        highScore = level;
    }
    let high = document.querySelector('h2')
    high.innerText = `the current highScore is ${highScore} `;
}

function reset() {
    gameSeq = []
    level = 0;
    started = false;
}