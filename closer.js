function stopWatch() {
    let count = 0;
    return function () { 
        /*(function inside function returned that's
         is closer environment)
        (CALL A FUNCTION INSIDE A FUNCTION OR 
        RETURN A FUNCTION FROM ANOTHER FUNCTION)*/
        count++;
        return count;
    }
}
const clockOne = stopWatch();
console.log(clockOne());
console.log(clockOne());
console.log(clockOne());
console.log(clockOne());

const clockTwo = stopWatch();
console.log(clockTwo());
console.log(clockTwo());
console.log(clockTwo());
console.log(clockTwo());
console.log(clockTwo());

console.log(clockOne());
console.log(clockOne());

console.log(clockTwo());
console.log(clockTwo());
