const randomDecimal = Math.random()//Step 1
const range = 33 - 3 + 1;//Step 2
const randomInRange = randomDecimal * range; //Step 3//Gets a range number between 0 (inclusive) and the value of range (exclusive).
const randomInt = Math.floor(randomInRange)//Step4//Converts decimals to the integers in the range.
const shiftValue = randomInt + 3;//Step 5//Gets an integer between 3 and 33

//There is 31 possible numbers//Question 1
//This gets a number that falls between 0 and the range//Question 2
//Math.round could potentially give a number that is too high for the range that we need.//Question 3
//The range of the integers is going to be beween 0 and 3.  Adding 3 will make the range 3-33//Question 4
