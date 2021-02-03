const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        break; //when you got gibber then 50 you can break now
    }
    console.log(numbers[i]);
}

const number = [10, 20, -30, 4 - 0, -50, 60, -70, 80, -90];
for (let i = 0; i < number.length; i++) {
    if (number[i] < 0) {
        continue;
    }
    console.log('Without negative numbers',number[i]);
}