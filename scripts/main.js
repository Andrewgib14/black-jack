/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


function handValue(hand) {
  let handAmmount = 0;
  let value = 0;
  let aces = 0;
  for (i = 0; i < hand.length; i++) {
    switch (hand[i]) {
      case "1":
        { value = 1; }
        break;
      case "2":
        { value = 2; }
        break;
      case "3":
        { value = 3; }
        break;
      case "4":
        { value = 4; }
        break;
      case "5":
        { value = 5; }
        break;
      case "6":
        { value = 6; }
        break;
      case "7":
        { value = 7; }
        break;
      case "8":
        { value = 8; }
        break;
      case "9":
        { value = 9; }
        break;
      case "10":
        { value = 10; }
        break;
      case "J":
        { value = 10; }
        break;
      case "Q":
        { value = 10; }
        break;
      case "K":
        { value = 10; }
        break;
      case "A":
        { aces += 1; }
        break;
    }

    handAmmount += value;
    value = 0;
  }
  while (aces != 0) {
    if (handAmmount <= 10 && aces === 1) {
      handAmmount += (aces + 10);
    }
    else if (handAmmount > 10 && aces > 1) {
      handAmmount += 1;
    }
    else if (handAmmount > 10) {
      handAmmount += aces;
    }

    aces--;
  }
  return handAmmount;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/