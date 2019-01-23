///////Exercise 1
console.log("*********************This is exercise 1")

// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.

function chickenMonkey() {
    for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
        
        // Divide the current number by 2, and check if the remainder is 0
        if (currentNumber % 5 === 0) {
            if (currentNumber % 7 === 0) {
                console.log("ChickenMonkey")
            }
            console.log("Chicken") // Only 0, 5, 10... will appear
        } else if (currentNumber % 7 === 0)
            console.log("Monkey")
        else
            console.log(currentNumber);
    }
}

chickenMonkey();
//// Exercise 2
// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

console.log("*********************This is exercise 2")

let bandNumber = 1

const takeNumber = function (bandName) {

let numberName = `${bandNumber}. ${bandName}`
// console.log(numberName)
    bandNumber = bandNumber+1;
    return numberName;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

console.log("*********************This is exercise 3")

// Practice: Cookout
// Copy the following objects into your JavaScript file.

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

console.log("this is the food array", foods)

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];
// This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.

// The grill() function. Copy this into your JavaScript as well.

console.log(cookedFood)

for(i=0;i<foods.length;i++){
    
function grill (currentObject) {  
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
    console.log(cookedFood)
}
grill(foods[i])
}
// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.


