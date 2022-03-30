
// function to play the game

//     all in while loop
//         window.confirm to keep playing or stop


// Some kind of input from user (RPS)
//                                             window.prompt()
var userInput = prompt("Rock, Paper, or Scissors?");


var userFunction = function(entry) {
  if (entry.toLowerCase() == "rock") {
    console.log("You put rock");
      // 0
    return "rock";
  }

  else if (entry.toLowerCase() == "paper") {
    console.log("You put paper");
    // 1
    return "paper";
  }

  else if (entry.toLowerCase() == "scissors") {
    console.log("You put scissors");
    
    // 2
    return "scissors";
  }

  else {
    entry = prompt("Please type either rock, paper, or scissors");
  }
}

window.alert(userFunction(userInput));

  
// there are many ways to use the prompt feature




// Some kind of input from computer ()

// Some function to randomly pick from RPS
//                                             function getRandomInt(max) {
//                                                 return Math.floor(Math.random() * max);
//                                             }

//                                             console.log(getRandomInt(3));




// Something to compare the two selections

// Choose a winner



// Display outcome
//         window.alert()



// Log results
//         use an array or multiple vars

// Display results
//         window.alert()

// Ask to play again or quit





//




// 





