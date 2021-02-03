const number = [2, 3, 4, 5, 6, 7, 8, 9];
/*const output = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const result = element * element;
    output.push(result);
}
console.log(output);*/

/*number.map(function (element, index, array) {
    console.log(element, "index: ", index, array);
})*/

/*const result = number.map(function (element) {
    return element * element;
})
console.log(result);*/

//javaScript map
const result2 = number.map(x => x * x); /* or
const result = number.map(element => element * element);*/
console.log(result2);


//javascript filter
const bigger = number.filter(x => x > 5);
const even = number.filter(x => x % 2 == 0);
console.log('Bigger then five: ', bigger);
console.log('Even number: ', even);

//javaScript find
const isThere = number.find(x => x > 5);// check only bigger then one number
console.log(isThere);