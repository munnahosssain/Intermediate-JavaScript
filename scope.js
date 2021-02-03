let bonus = 50; // Global  variable
function sum(firstNum, secondNum) {
    let result = firstNum + secondNum + bonus;
    console.log('inside function Local and global value 1: ', result);
    if (result > 10) {
        var day = "friday";//when called 'var' we can declare anywhere console.log
        day = "monday";
    }
    console.log(day);
    
    if (result > 10) {
        let days = "friday";//when called 'let' we can should inside console.log
        console.log(days);
    }
    return result;
}
console.log('Global value: ', bonus);
console.log('Local and global value 2: ', sum(10, 5));