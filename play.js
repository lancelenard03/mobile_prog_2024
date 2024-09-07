// 1. DECLARING AND ASSIGNING VARIABLES
// Declare and assign variables to store user information
let userName = "Lance"; 
let userAge = 22;
let hasPets = true;
let cannotChange = "Lance";

// * CONDITIONAL STATEMENTS
// Use if statements to check conditions and perform actions
if(hasPets) { 
    console.log("I have pets");
}

// Use if-else statements to check multiple conditions and perform actions
if(userAge > 21){
    console.log("You are older than 21.");
}else if(userAge <30){
    console.log("You are younger than 21.")
}else{
    console.log("You are 21 years old.");
}

// Use switch statements to check multiple values and perform actions
switch (userName) {
    case "Lance":
        console.log("You are Lance")
        break; 
    default: 
        console.log("You are not Lance");
}

// 2. PRINTING TO THE CONSOLE
// Print variables to the console
console.log(userName);
console.log(userAge);
console.log(hasPets);

// Print a constant variable to the console
console.log(cannotChange);

// Use template literals to print a formatted string to the console
console.log(`My name is ${userName} and I am ${userAge} years old.`); 

// 2. ARRAY DECLARATION 
// Declare an array to store favorite foods
let favoriteFoods = ["Fries", "Burger", "Shawarma"];

// Print the array to the console
console.log(favoriteFoods); 

// Access an element in the array
console.log(favoriteFoods[0]); 

// Use a for-of loop to iterate over the array and print each element
for (let food of favoriteFoods) {
    console.log(food);
}

// Add an element to the array
favoriteFoods.push("Burgers");

// Print the updated array to the console
console.log(favoriteFoods); 

// MAPPING IN ARRAY
// Use the map method to loop through the array and modify each element
favoriteFoods.map(food => {
    food = food + " is delicious ";
});

// Print the modified array to the console
console.log(favoriteFoods); 

// 3. OBJECT DECLARATION
// Declare an object to store user information
let user = {
    name: "Lance", 
    age: 22, 
    hasPets: true, 
    greet: function(){// this is a method/function of the object
        console.log("Hello, I am " + this.name); 
    }
};

// Access object properties
console.log(user.name); 
console.log(user.age); 
console.log(user.hasPets); 

// 4. FUNCTION DECLARATION
// Declare a function to print a greeting
function sayHello(){
    console.log("Hello, how are you?");
}

// Call the function
sayHello(); 

// Declare a function using an arrow function
const sayGoodbye = () => {
    return "Goodbye, see you later!"; 
};

// Call the function and print the result to the console
console.log(sayGoodbye()); 

// ADDING PARAMETERS/ARGUMENTS TO FUNCTIONS
// Declare a function that takes two parameters
function describeUser(name, age) { 
    console.log("This person is " + name + " and is " + age + " years old");
}

// Call the function with arguments
describeUser(userName, userAge); 

// Declare a function using an arrow function with parameters
const describeUserArrow = (name, age) => {
    return `This person is ${name} and is ${age} years old`;
};

// Call the function with arguments and print the result to the console
console.log(describeUserArrow(userName, userAge));