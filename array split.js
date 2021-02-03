const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cuttingPart = numbers.slice(3, 7);//start to end cutting
// console.log(cuttingPart);//4 to 7 is cutting-- others value is delate
// console.log(numbers);//array is not changed

const removePart = numbers.splice(3, 4);//3 is start number and 4 is what number you cutting
console.log(removePart);
console.log(numbers);//array is changed

const removePart2 = numbers.splice(3, 4, 77, 11);//3 is start number and 4 is what number you cutting--77 and more added numbers
//console.log(removePart2);
console.log(numbers);//array is added new numbers

const  together=numbers.join(' ');
console.log('Join numbers: ',together);