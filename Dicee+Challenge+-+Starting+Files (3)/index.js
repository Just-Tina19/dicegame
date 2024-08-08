alert("Players Should Enter Their Names");


let player1= prompt("player 1, What is your name?");
let firstChar = player1.slice(0,1);
let upperCaseFirstChar = firstChar.toUpperCase();
let restChar = player1.slice(1,player1.length);
let lowerCaseRestChar = restChar.toLowerCase();
let capitalizedName = upperCaseFirstChar + lowerCaseRestChar;
player1= upperCaseFirstChar + lowerCaseRestChar;

let player2 = prompt("player 2, what is your name?");
let firstAlphabet = player2.slice(0,1);
let upperCaseFirstAlphabet =  firstAlphabet.toUpperCase();
let restChar2 = player2.slice(1,player1.length);
let restAlphabet = restChar2.toLowerCase();
let capitalizedPlayer2 = upperCaseFirstAlphabet + restAlphabet;
player2=upperCaseFirstAlphabet + restAlphabet;



function play(){

    
let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;
let image1 = document.querySelectorAll("img") [0];

image1.setAttribute("src",randomImageSource);




let randomNumber2 = Math.floor((Math.random() * 6) + 1);
let randomDiceImage2 = "dice" + randomNumber2 + ".png";
let randomImageSource2 = "images/" + randomDiceImage2;
let image2 = document.querySelectorAll("img") [1];

image2.setAttribute("src",randomImageSource2);




if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = capitalizedName + " won 🏆";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = player2 + " won🏆";
}else{
    document.querySelector("h1").textContent = "Draw!";
}

document.querySelector(".play1").innerHTML = player1;
document.querySelector(".play2").innerHTML = player2;


}

