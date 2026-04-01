# JavaScript

Programming language usually used to interact with browsers (web pages), general purpose.

Created in just 10days by Brendan Elch (1995) -> Netscape

Mocha -> LiveScript -> JavaScript

JavaScript != Java

Around 2015 all the standard rules of writing JavaScript were put together as ECMAScript (ES) ES6 

## Why JS?

Provide web applications with  some behaviour/interactivity

### Type of Language

#### Level of Abstraction

Abstraction - ability to hide implementation details from the user / call

        a. Low-Level -> Closer interaction with computer hardware, harder to read by humans mostly tailored to machine language e.g Machine Language (Binary), Assembly (symbols)
        b. High-Level -> Human friendly interaction. require compiler/interpreter translation to machine  e.g JavaScript, Python, Java, Ruby etc...

### Execution Method

        a. Compiled Languages - Entire code is converted to machine code before execution by compiler [execution is faster] e.g C, C++, C#, Kotlin, Rust
        b. Interpreted Languages - Code executed line by line at runtime by an interpreter. E.g JavaScript, Python, PHP

### Typing System

Typing - representation of data in the programming language

a. Strongly Typed - Have types associated to data in memory -> [JIT] TypeScript
b. Loosely Typed - Minimal or no type associations in memory -> 

### Programming Paradigm

Approach to problem solving

    a. Procedural - Step by step (main focus is on the process) e.g C
    b. Object Oriented - organizing the program around data and their operations e.g Java, JavaScript, Python, C++
    c. Functional - Treating programs as mathematical functions (avoid changing data/input operations that can be done on the input) e.g Haskell, Erlang, F#, Scala
    d. Scripting
    e. Logic
    f. Declarative

### Languages that morphed from JavaScript

- TypeScript - Strongly typed JS programming language 
- CoffeeScript


All JavaScript programs are executed JS files.


## Variables

A named container for storing data (in memory).

Types/Categories

a. Constants - That have values that never change. {const}
b. Variable - Whose value can change { let -> access to a specific scope, var -> unscoped }

Syntax: {var_identifier} {name} = {value}


### Garbage Collected Languages

- Program whose main work is to manage memory allocation and deallocation

JavaScript, Java, C#, Kotlin, Rust


### No GC

- Developer is responsible for memory mgmt

C, C++


## Data Types

A set of possible operations that an input can have.

1. String -> Text formatted data. "in here", 'in here', `0`
2. Number -> Data that can have arithmetic operations performed (integer, floating-point/decimal)
3. Boolean -> True/False
4. Undefined -> a declared variable without a value yet
5. Null -> a value that indicates intentional emptiness

NaN -> Not A Number

### Rules for variable naming

- Named in any way possible except for JS reserved keywords.
- Can only have one special chars i.e _ 
- Can not start with a number / fully numbers 

Modulus -> remainder in a division operation

## Expressions vs Statements {SEMANTICS}

1. Expression - Piece of code that produces a value that can be stored in a variable.
2. Statement - instructions that perform an action. Can contain expressions, on their own can not produce a value. Program what to do.



Y = mx + c [In algebra = Equals]

20 = 2x + 10

2x = 2x + 10






## Functions

A reusable piece of code that can intake params and output values.

DRY (Don't Repeat Yourself) Principle - If you find yourself copy and pasting any code you need a function

### Constructing Functions

1. Functional Declaration
2. Function Expression
3. Arrow

default parameters


### Scope

The extent of access to which an entity possesses

1. Global Scope: It can be accessed by the entire file
2. Local Scope: Encompassed inside function braces


## Functional Programming

- Functions can intake other functions as their inputs, return other functions as outputs [Higher Order Function]
- Assign functions to variables
- Store as object properties
- Store in arrays

Functions are treated as first class citizens of the programming language.

### Higher Order Functions

Functions can intake other functions as their inputs, return other functions as outputs

function reference -> functions as arguments

function call -> executing function
