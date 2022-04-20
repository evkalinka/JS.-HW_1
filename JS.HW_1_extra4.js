
let age = prompt('How old are you?', 18);

function checkAge(age) {
    var age = new Number(age)
    if (isNaN(age)) { 
        return ("Error!");
    } else if (age<18){
        return ("You don’t have access cause your age is "+ age + " It’s less then ");
    } else if (age>=a18&&age<=60){
        return ("Welcome !");
    } else if (age>60){
        return ("Keep calm and look Culture channel");
    } else {
        return ("Technical work");
    }
}
console.log(checkAge(age));