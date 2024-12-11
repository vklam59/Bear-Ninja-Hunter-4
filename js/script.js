// Define variables
let winCount = 0;
let lossCount = 0;
let userInput;
let userchoice;
let result;

// Buttons presenting options for player to choose from
let bear = function () {
  userchoice = "bear";
  bnh();
};
let ninja = function () {
  userchoice = "ninja";
  bnh();
};
let hunter = function () {
  userchoice = "hunter";
  bnh();
};

// BEAR NINJA HUNTER - Arrow function
let bnh = () => {
  //Computer randomizes a choice within the array
  const myArray = ["Bear", "Hunter", "Ninja"];
  let computerchoice = myArray[Math.floor(Math.random() * myArray.length)];

  // Determine game winner based on this set of game rules. Bear beats Ninja, Ninja beats Hunter, and Hunter beats Bear.
  if (computerchoice == "Bear") {
    switch (userchoice.toLowerCase()) {
      case "bear":
        result = "Tie";
        break;
      case "hunter":
        result = "User wins";
        break;
      case "ninja":
        result = "Computer wins";
        break;
    }
  } else if (computerchoice == "Ninja") {
    switch (userchoice.toLowerCase()) {
      case "bear":
        result = "User wins";
        break;
      case "hunter":
        result = "Computer wins";
        break;
      case "ninja":
        result = "Tie";
        break;
    }
  } else if (computerchoice == "Hunter") {
    switch (userchoice.toLowerCase()) {
      case "bear":
        result = "Computer wins";
        break;
      case "hunter":
        result = "Tie";
        break;
      case "ninja":
        result = "User wins";
        break;
    }
  }

  // Win loss condition
  if (result == "Tie") {
    result = "It is a tie!";
  } else if (result == "User wins") {
    result = "You win!!";
    winCount++;
  } else if ("Computer wins") {
    result = "You lose...";
    lossCount++;
  }

  // Display Win Counts in HTML after each player selection
  document.getElementById("farewell-container").style.display = "block";
  document.getElementById(
    "result"
  ).innerHTML = `You picked ${userchoice}. <br> The computer picked ${computerchoice}! <br>Result: ${result}`;
  document.getElementById("stat").innerHTML = `
      <h3>Your Wins: ${winCount}</h3>
      <h3>Computer Wins: ${lossCount}</h3
  `;
};
