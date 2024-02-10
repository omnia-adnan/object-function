// Task 1
function checkVotingEligibility() {
  var age = 18
    if(age >= 18){
      console.log("You are eligible for voting");
    }else{
      console.log("You are not eligible for voting.");
    }
}

// Task 2
function printNumbersWithWhile() {
  var num = 1;
  while (num <= 5) {
    console.log(num);
    num++
  }}

// Task 3
function printEvenNumbersWithFor() {
  for (var i = 0; i <= 10; i++) {
    if(i % 2 == 0){
      console.log(i);
    }
  }
}
// Task 4
function getDayOfWeek() {
  
  switch (new Date()) {
    case 0:
      console.log("Sunday");
      break;
      case 1:
      console.log("Monday");
      break;
      case 2:
        console.log("Tuesday");
        break;
        case 3:
          console.log("Wednesday");
          break;
          case 4:
            console.log("Thursday");
            case 5:
      console.log("Friday");
      break;
      case 6:
      console.log("Saturday");
      break;
  }
}

// Task 5
function sum(num1,num2) {
  return sum = num1 + num2;
}
sum(4, 3); 
// Task 6
fruits = ['Watermelon', 'Strawberry','Mango', 'Kiwi', 'Blueberry','Apple']
//Uncomment and solve
// const fruits = ;

module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};
