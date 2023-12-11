//Prime Numbers

//Accept user input
const userInput = parseInt(prompt('Enter a number: '));
let isPrime = true;

//Check if it's a prime number

//If the number is equal to 1
if(userInput === 1) {
    console.log('This number is not a prime number');
}
// If the number is greater than 1 
else if(userInput > 1) {
    for (let i = 2; i < userInput; i++) {
        if (userInput % i == 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        console.log(`${userInput} is a prime number`);
    } else {
        console.log(`${userInput} is not a prime number`);
    }
//If the number is less than 1
} else {
    console.log('This number is not a prime number');
}
