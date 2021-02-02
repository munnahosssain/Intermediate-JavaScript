let number1, number2;
number1 = 1;
number2 = true; // condition one is true and o is false
if (number1 == number2) {
    console.log("condition matched");
}
else {
    console.log('condition not matched');
}

number1 = 10;
number2 = '10'; // check string
if (number1 == number2) {
    console.log("condition matched");
}
else {
    console.log('condition not matched');
}

number1 = 10;
number2 = '10';
if (number1 === number2) { // triple equal check type and value
    console.log("condition matched");
}
else {
    console.log('condition not matched');
}

// double equal is checking only value
// triple equal is checking value and type(numeric number or string...)