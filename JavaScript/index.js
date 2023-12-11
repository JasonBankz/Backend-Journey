/*
console.log("I like pizzas");
console.log("I love pizzas");
window.alert("I REALLY LOVE PIZZA");

A variable is a container for storing data
Two steps to declare a variable

1. Declaration (var, let, const)
2. Assignment (= assignment operator)


let firstName = "Bro"; //strings
let age = 21; //numbers
let student = true; //booleans

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled " + student;

How to accept user input

let userName = window.prompt("Whats's your Name?");
console.log(userName);

let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
}


let age = window.prompt("How old are you?");
age = Number(age);
age += 1;
console.log("Happy Birthday! You are " + age + " years old");

let x;
let y;
let z;

x = Number("3.14")
y = String(3.14)
console.log(x, typeof x);
console.log(y, typeof y);


Hypothenus Triangle
let a = window.prompt("Please enter side A:");
a = Number(a)
let b = window.prompt("Please enter side B:");
b = Number(b)
let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side C: " + c);


// Arrays - variables that hold multiple values

const fruits = ['apples', 'oranges', 'pears'];
fruits.push('grapes');
fruits.pop();
console.log(fruits);

// Object literals

const person = { 
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['gaming', 'singing', 'jogging'],
    address: {
        street: '50 Main St',
        city: 'Boston',
        state: 'MA'
    }
}
const { firstName,lastName, address: {city}} = person
console.log(firstName, lastName, city);


const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id:1,
        text: 'Dentist appt',
        isCompleted: false
    },
];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);



// Looping through arrays. There are three methods: forEach, map and filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

const todoText = todos.map(function(todo) {
    return todo.text;
});
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}); 

 //Conditionals

const x = '11';

if(x == 10) {
    console.log('X is 10');
} else if(x > 10) {
    console.log('X is greater than 10');
} else {
    console.log('X is less than 10');
}

 

// Switch
const x = 9;

// const color = x  > 10 ? 'red' : 'blue';
const color = 'green';

switch(color) {
    case 'red':
        console.log('Color is Red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default: 
        console.log('Color is neither Red nor Blue');
        break;
}


// Functions
function addNums(num1, num2) {
    return num1 + num2;
}

console.log(addNums(6, 5));

// Arrow Function
const addNums = (num1 =1, num2 = 1) => num1 + num2;
console.log(addNums(5, 5));

//Or

const addNums = num1 => num1 + 5;
console.log(addNums(5));

// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob =  new Date(dob);
    this.getBirthYear = function() {

    }
}

//Instantiate Object
const person1 = new Person('John', 'Doe', '4-3-2005');
const person2 = new Person('Mary', 'Smith', '12-4-2005');


// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
*/

