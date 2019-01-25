$(document).ready(function(event) {

    //Calculates random number
    let number = Math.floor(Math.random() * (11 - 1) + 1);
    


    //Displays message with random number in console
    let print = (message) => {
        console.log(`${message}`);
        console.log(`The number is ${number}.`);
    }
    //Calls print() and passes Hello World argument
    print("Hello World!");




    //Multiplies random variable by 4 and displays in console, delayed 2 seconds
    let multiply = () => {
        let multiplyNumber = number * 4;
        console.log(`${number} multiplied by 4 is ${multiplyNumber}!`);
    }
    //Multiply() runs after 2 seconds
    setTimeout(multiply, 2000);




    //displays words 'Nice' 'To' 'See' 'You' with delays when called
    let getWords = (word1, word2, word3, word4) => {
        //word1 logs right away
        console.log(`Word 1: ${word1}`)
        //word 2 with 3 second delay
        setTimeout(() => {
            console.log(`Word 2: ${word2}`);
        }, 3000)
        //word 3 with 2 second delay
        setTimeout(() => {
            console.log(`Word 3: ${word3}`);
        }, 2000)
        //word 4 with 1 second delay 
        setTimeout(() => {
            console.log(`Word 4: ${word4}`);
        }, 1000)
    }
    // Calls getWords() function with arguments
    getWords("Nice", "You", "See", "To");



    
    //displays "Lift-off" message at the end of countdown function
    let done = (message) => {
        console.log(`${message}`);
    }
    //Counts down from 10, delays 1 second inbetween
    let countdown = (num, callback) => {
        console.log(`Countdown: ${num} seconds`);
        num -= 1;
        let timer = setInterval(() => {
            if(num > 1) {
                console.log(`Countdown: ${num} seconds`)
                num -= 1;
            } else if(num === 1) {
                console.log(`Countdown: ${num} second`);
                num -= 1;
            } else if(num === 0) {
                //calls done() function with message through the "callback" argument
                callback("Lift-off!");
                clearInterval(timer);
            }
        }, 1000)
    }
    //Calls countdown() function with arguments
    countdown(10, done);




    let globVar = true;

    let orderingChickenSandwich = () => {
       return new Promise((resolve, reject) => {
            if(globVar = true) {
                let order = {sandwich: "chicken", vegetables: "lettuce"};
                resolve(order);
            } else if(globVar = false) {
                let error = new Error("Sorry, an error ocurred with your order.");
                reject(error);
            }
        })
    }

    let orderFood = () => {
        console.log(orderingChickenSandwich());
    }
    //Calls orderFood
    orderFood();



    
    let promiseOne = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(1);
            }, 2000);
        })
    }
    let times2 = (number1) => number1 * 2;
    let times4 = (number2) => number2 * 4;
    let times6 = (number3) => number3 * 6;

    promiseOne().then((result1) => {
        let multiply2 = times2(result1);
        console.log(`2 multiplied by 2 is ${multiply2}!`)
        return multiply2;
    }).then((result2) => {
        let multiply4 = times4(result2);
        console.log(`2 multiplied by 4 is ${multiply4}!`)

        return multiply4;
    }).then((result3) => {
        let multiply6 = times6(result3);
        console.log(`8 multiplied by 6 is ${multiply6}!`)

        return multiply6;
    }).catch((error) => {
        let issue = new Error("Oops, something went wrong!");
        console.log(issue);
    });
    
});
