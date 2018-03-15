function playGame() {		//funtion for lucky sevens
    var betAmount = document.forms['luckySevens']['betAmount'].value;  //document form where the user inserts money
    if (betAmount <= 0) {  //if amount = less than 0
        alert('Please enter a number greater than 0.')  //display error message to user that it needs to be greater than
    }
	function rollDice() {  //roll dice function
        var die1 = Math.ceil(Math.random() * (1 + 6 - 1)); //sets dice1 to math variable that sets dice to 1-6
        var die2 = Math.ceil(Math.random() * (1 + 6 - 1)); //sets dice2 to math variable that sets dice to 1-6
        return die1 + die2; //returns value of dice
    }
    var betMoney = Number(betAmount); //declares variables for bet amount
    var totalnumofRolls = 0; //variable for number of rolls
    var highestamountofMoney = 0; //variable for highest amount of money
    var highestrollAmount = 0; //variable for highest amount of rolls
   //play game
    while (betMoney > 0) { //play with greater than 0
        var sumOfDice = rollDice();//takes the sum of rolled dice
         totalnumofRolls ++; //number of rolls are increased
        if (sumOfDice === 7) { //if sum equals 7
            betMoney += 4; //add 4
            if (betMoney > highestamountofMoney) { //betmoney greater than highest amount
                highestamountofMoney = betMoney; //highest amount = the bet money
                highestrollAmount = totalnumofRolls; //highest rolls = the total of rolls
            }
        }
        else { //else 
            betMoney -= 1; //bet money take away one
        }
    }
 
    // send data to table
    document.getElementById("startingBet").innerText = "$" + betAmount; //this is the starting bet amount in table
    document.getElementById("Total-Rolls-Before-Broke").innerText = totalnumofRolls;//the total number of rolls
    document.getElementById("highest-amount-won").innerText = '$' + highestamountofMoney;// sends highest amount won to table
    document.getElementById("Roll-Count-Highest").innerText = highestrollAmount; // sends the highest roll count
    document.getElementById("submitButton").innerText = 'Play Again'; //sents sumbit button to play again
    return false;
}
