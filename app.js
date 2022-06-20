const colors = ["green", "red", "rgba(133,122,200)", "#f1f5025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click" , function(){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * color.length);
}