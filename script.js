//JS- Check if a Number is Even or Odd- Task-13

// function is used after mentor's feedback
function checkEvenOdd(num) {
    let result;

    if (num % 2 === 0) {
        result = "even";
    } else {
        result = "odd";
    }

    console.log(`The number ${num} is ${result}.`);
}

checkEvenOdd(5);
checkEvenOdd(10);

