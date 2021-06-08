//Functions are capitalized

function Hello() {
  console.log("Hello world");
}

function numberEntered(num) {
  console.log(`The number you entered was: ${num}`);
}

function addAnyTwoNumbers(x, y) {
  console.log(x + y);
}

function subtractTwoNumbers(firstNum, secondNum) {
  console.log(firstNum - secondNum);
}

subtractTwoNumbers(5, 7);

//return
//Function stops when it reaches a return statement

function getMyBattingAverage(atBats, numberOfHits) {
  let myAverage = numberOfHits / atBats;
  return myAverage;
}

function yourName(firstName, lastName) {
    let wholeName = `Your name is: ${firstName} ${lastName}`;
    return wholeName;
}

function calculatePrice(quantity, price) {
    let totalPrice = 1.07 * quantity * price;
    return totalPrice;
}

console.log(calculatePrice(17, 5));