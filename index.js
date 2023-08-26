//!Question-1 Write one example explaining how you can write a callback function

function Sum(num1, num2, averageCallBackFun) {
    let sum = num1 + num2;
    console.log(`Sum of ${num1}, ${num2} is ${sum}`);
    averageCallBackFun(num1, num2, sum);
}

function Average(n1, n2, sumValue) {
    console.log(`Average of ${n1}, ${n2} is ${sumValue / 2}`);
}

Sum(10, 20, Average);
//Result => Sum of 10, 20 is 30.
//Rsult => Average of 10, 20 is 15.

//? => A callback function is a function which we passed as an argument in other function.
//? => In the above example Average function is used as a callback function, which is passed as an agrument in Sum function with two other parameters


//!Question-2  "Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 
//!  Numbers
//!  1
//!  2
//!  3
//!  4
//!  5
//!  6
//!  7
// ? Explain callback hell.
function printOne() {
    console.log(1);
}
function printTwo() {
    console.log(2);
}
function printThree() {
    console.log(3);
}
function printFour() {
    console.log(4);
}
function printFive() {
    console.log(5);
}
function printSix() {
    console.log(6);
}
function printSeven() {
    console.log(7);
}
setTimeout(() => {
    printOne();
    setTimeout(() => {
        printTwo();
        setTimeout(() => {
            printThree();
            setTimeout(() => {
                printFour();
                setTimeout(() => {
                    printFive();
                    setTimeout(() => {
                        printSix();
                        setTimeout(() => {
                            printSeven();
                        }, 7000);
                    }, 6000);
                }, 5000);
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);
printNumber(7, timeDelay);
//?=> Callback hell, also known as "pyramid of doom," refers to a situation in JavaScript where nested callbacks create a deeply nested and hard-to-read code structure




//!Question-3 Write the promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 
//!  Numbers
//!  1
//!  2
//!  3
//!  4
//!  5
//!  6
//!  7
function newPromise(num) {
    return new Promise((resolve) => {
        resolve(num);
    })
}

function main() {
    for (let i = 1; i <= 7; i++) {
        setTimeout(() => {
            newPromise(i).then((result) => {
                console.log(result);
            })
        }, (i * 1000));
    }
}
main();



//! Question-4 "Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed  then it should go to reject the state and catch the error and print Promise Rejected "

function newPromise(value) {
    return new Promise((resolve, rejected) => {
        if (value === "yes") {
            resolve("Promise Resolved");
        } else {
            rejected("Promise Rejected");
        }
    })
}
newPromise("yes").then((response) => {
    console.log(response);
}).catch((error) => {
    console.log("Error :" + error);
})


//! Question-5 Create examples to explain callback function.
let oddSumResult = 0;
let evenSumResult = 0;
function oddSum(n) {
    oddSumResult += n;
}
function evenSum(n) {
    evenSumResult += n;
}
function mainFun(array, oddSumCallBack, evenSumCallBack) {
    array.forEach((number) => {
        if (number % 2 === 0) {
            evenSumCallBack(number);
        } else {
            oddSumCallBack(number);
        }
    })

}
mainFun([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], oddSum, evenSum);
console.log("Even Number Sum : ", evenSumResult);
console.log("Odd Number Sum : ", oddSumResult);

//*=> In the above code we defined three function oddSum, which accept one parameter, function evenSum, which accept one parameter and one main Function which accept three parameter, one is array and two callback functions.
// Inside the main function we call a forEach on a coming array, inside the forEach there is a condition which checks if the number is even then it will call the evenSumCallBack() function with the number, which pass the conditon. Otherwise it call the  oddSumCallBack() function with the number, which did not pass the condition.
// after defining the mainFun, we call the mainFun with 3 arguments, One is array of number, second is oddSum and third is evenSum function.


//! Question-6 Create examples to explain callback hell function.
function printOne() {
    console.log(1);
}
function printTwo() {
    console.log(2);
}
function printThree() {
    console.log(3);
}
function printFour() {
    console.log(4);
}
function printFive() {
    console.log(5);
}
function printSix() {
    console.log(6);
}
function printSeven() {
    console.log(7);
}
setTimeout(() => {
    printOne();
    setTimeout(() => {
        printTwo();
        setTimeout(() => {
            printThree();
            setTimeout(() => {
                printFour();
                setTimeout(() => {
                    printFive();
                    setTimeout(() => {
                        printSix();
                        setTimeout(() => {
                            printSeven();
                        }, 7000);
                    }, 6000);
                }, 5000);
            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);
printNumber(7, timeDelay);

//*The given code snippet demonstrates an example of "callback hell," which is a term used to describe a situation where multiple nested callbacks are used within asynchronous functions, leading to complex and hard-to-read code. This pattern can arise when dealing with asynchronous operations, such as timers, API calls, and file operations, that need to be executed in a specific sequence. This structure creates a pyramid-like nesting of callbacks, and as you can see, the code becomes difficult to follow as the number of nested callbacks increases. It can also become error-prone, as managing the sequence and timing of operations becomes complex.


//! Question-7 Create examples to explain promises function.
function conditionCheckPromise(num) {
    return new Promise((resolve, rejected) => {
        if (num > 2) {
            resolve("Promise Resolved");
        } else {
            rejected("Promise Rejected");
        }
    })
}

conditionCheckPromise(10).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})





//! Question-8 Create examples to explain async await function.
let url1 = "https://api.github.com/users";
let url2 = "https://jsonplaceholder.typicode.com/comments";

async function fetchUser() {
    let response = await fetch(url1);
    let result = await response.json();
    console.log(result);
}
fetchUser();




//! Question-9 Create examples to explain promise.all function.

function promiseFirst() {
    return new Promise((resolve) => {
        resolve(`The promiseFirst is resolved`);
    })
}
function promiseSecond() {
    return new Promise((resolve) => {
        resolve(`The promiseSecond is resolved`);
    })
}
function promiseThird() {
    return new Promise((resolve) => {
        resolve(`The promiseThird is resolved`);
    })
}

function promiseResultPrinting(arrResult) {
    arrResult.forEach((result) => {
        console.log("Promise.All() Results : ", result);
    })
}

Promise.all(([promiseFirst(), promiseSecond(), promiseThird()])).then((result) => {
    promiseResultPrinting(result)
})
//* Promise.all() runs the all promise at once. It take an array of promise and then return the result of all promises if it is resolved, in array form.