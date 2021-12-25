
// let score = 0;
// let win = 0
// let lose = 0
// for (let index = 0; index < 5; index++) {
      


// function getComputerChoice(selection) {


// let choice = (Math.floor((Math.random()*3)));

// if (choice === 0) 

// {
//     selection = "rock";
//     return selection;
// }
// else if (choice === 1)
// {
//     selection = "paper";
//     return selection;
// }   

// else {
//     selection = "scissor";
//     return selection;
// }
   
// }

// compChoice = (getComputerChoice());

// console.log(compChoice);

// // Now we get the selection from the user.

// let userselection = prompt("Enter rock, paper, or scissor");
// userlower = userselection.toLowerCase(); //converting it to lower case so that we can take other inputs.








// function result(res)
// {
//     if (compChoice === userlower) 
//     {
//         res = "tie";
//         return res;
//     } 
//     else if (compChoice === "rock" && userlower === "paper" ){

//         res = "you win";
//         return res;

//     }
//     else if (compChoice === "rock" && userlower === "scissor" ){

//         res = "you lose";
//         return res;

//     }





//     else if (compChoice === "paper" && userlower === "rock" ){

//         res = "you lose";
//         return res;

//     }
//     else if (compChoice === "paper" && userlower === "scissor" ){

//         res = "you win";
//         return res;

//     }






//     else if (compChoice === "scissor" && userlower === "paper" ){

//         res = "you lose";
//         return res;

//     }
//     else if (compChoice === "scissor" && userlower === "rock" ){

//         res = "you win";
//         return res;

//     }






//     else {
//         res = "enter valid input";
//         return res;
//     }
// }

// (result());

// let i = result();

// console.log(i);



// if (i==="you win")

// {   
//  win = win+1;
//  }

// else if (i==="you lose") {
//     lose = lose+1;
// }

// // else if (i==="tie")
// // {
// //     console.log("nvm");
// // }

// // else {
// //     console.log("how did we end up here")
// // }
// }

// if (win===lose){
//     alert("tie");
// }
// else if (win>lose){
//     alert("you win the game");
// }


// else if (win<lose){
//     alert("you lose");
// }

// else {
//     alert("you lose");
// }



// /////////////////////////////////////////////////////////////

const repeatString = function() {
    let str='hey';

    for (let i = 0; i <=3 ; i++)
    {
        return str;
    }
}
repeatString('hey');