console.log("file loaded");

const body = document.querySelector("body");

const game1 = document.querySelector(".game1");
game1.addEventListener("mouseover", function(){
    body.classList.add('game1Background');
    body.classList.remove('game2Background');
    body.classList.remove('game3Background');
});

const game2 = document.querySelector(".game2");
game2.addEventListener("mouseover", function(){
    body.classList.add('game2Background');
    body.classList.remove('game1Background');
    body.classList.remove('game3Background');
});

const game3 = document.querySelector(".game3");
game3.addEventListener("mouseover", function(){
    body.classList.add('game3Background');
    body.classList.remove('game2Background');
    body.classList.remove('game1Background');
});