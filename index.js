const pi = 3.14175

let cows = 31

const consoleMessage = "These are the values in the variables "

let isOldEnough = false

let isYoungEnough

const paye = null

// console.log(isYoungEnough)

// console.log(consoleMessage, pi, cows)

cows = 55

// pi = 4.20

// console.log(consoleMessage, pi, cows)

// Arithmetic Operations
let sum = 5 + cows; 





const sub = cows - pi;

const mult = 10 * 6; // = 60
const div = 90 / 7; // = 12.8
const mod = 90 % 7; // = 6



// assignment operator

// Shorthand representations of Arithmetic Operations
// console.log("Sum = ", sum)
// sum = sum + 95
sum += 95

// console.log("Sum = ", sum)

let heads
heads += 20
// console.log("Heads ==> ", heads)


// Functions

// Declaration
function sayHello(last_name, first_name){
    console.log("Hello World: ", last_name, first_name)
    const output = `Hello; ${last_name}, ${first_name}`
    return output;
}


// Expression
let summation = function(a = 0, b = 0){
    const tmp = a + b
    return tmp
}

const a = 45
let summation2 = function(a = 0, b = 0){
    return a + b
}




const s1 = summation(20, 13)
console.log("The sum of 20 and 13 is ", s1)

const s2 = summation2(20, 13)
console.log("The sum2 of 20 and 13 is ", s2)


// Arrow / {Anonymous}
const subtraction = (b = sum, a) => {
    return b + a
}

const division = (b, a) => b / a


// const firstMessage = sayHello("Mwangi", "Opiyo")
// console.log("This is the output message", firstMessage)
// sayHello("Biden", "Joe")
// sayHello("Omondi", "Kamau")

let greeting = function(firstName, action){
    const formattedMessage = action(firstName)
    
    const formattedGreeter = (lastName) => {
        console.log(`Hello, ${formattedMessage} ${lastName}`)
    }

    return formattedGreeter
}

let capitalize = function(a){
    return a.toUpperCase()
}

const greeter = greeting("Ian", (a) => a.toLowerCase())
greeter("Okumu")

greeting("Ian", capitalize)("Okumu")



function createCounter(){
    let count = 0;

    return function(){
        count++
        return count
    }
}

const myCounter = createCounter()

console.log(myCounter())
console.log(myCounter())



