let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

function checkAge(age) {
    if (age<age_2){
        return ("You don’t have access cause your age is "+ age + " It’s less then ");
    } else if (age>=age_2&&age<=age_3){
        return ("Welcome !");
    } else if (age>age_3){
        return ("Keep calm and look Culture channel");
    } else {
        return ("Technical work");
    }
    }
console.log(checkAge(17));
console.log(checkAge(18));
console.log(checkAge(61));