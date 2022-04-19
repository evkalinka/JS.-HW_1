
let age = prompt('How old are you?', 18);

function checkAge(age) {

const parsed = parseInt(age, 10);
if (isNaN(parsed)) { alert ("Error!");
} else if (age<18){
    alert ("You don’t have access cause your age is "+ age + " It’s less then ");
} else if (age>=18&&age<=60){
    alert ("Welcome !");
} else if (age>60){
    alert ("Keep calm and look Culture channel");
} else {
    alert ("Technical work");
}
}
  console.log(checkAge(age));