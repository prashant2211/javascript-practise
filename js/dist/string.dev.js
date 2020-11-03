"use strict";

/*=========================================================================================================\\
                                         ---------------   
                                         |   HEADING    |
                                         ----------------

                Author:- Prashant Raj
                Level :- Beginers
                Topic :-  String 
                Description :- whole string cover in this code.
//=========================================================================================================*\


/*``````````````````````````````````````````````````````````````````````````````````````````````````````````\\
                                        ----------------                              
                                       |     CODE       |                                       
                                        ----------------                                         */
// simple string initilazition and check the length of string
var fruit = 'banana'; //String decleration

var morefruits = 'banana\n apple'; // \n is used for change the line

console.log(fruit);
console.log(morefruits); //  length check 

console.log("length of fruit : " + fruit.length); // check the length of fruits.

console.log("Length of morefruits: " + morefruits.length); // use of indexOf 
// ---------------------------
// in javascript index start from 0

console.log('Index of an : ' + fruit.indexOf('an')); //  output is 1 because a found in first place

console.log('Index of q : ' + fruit.indexOf('q')); // here the output is -1 because q is not found at the given String

console.log('Index of an : ' + fruit.indexOf('nan')); // here output is 2 because n is found on 2nd index.
// slicing.......
//------------------------

console.log(fruit.slice(2, 6)); //  it will cut the string from 2 to 6 here the output is nana.
// Replace 
// Replace the string
//------------------------------

console.log(fruit.replace('ban', '123')); // here ban replace with 123
// convert string into upper case
//--------------------------------------

console.log(fruit.toUpperCase()); // here it will convert into upper case
// lower case convert into lower case
//---------------------------------------

console.log(fruit.toLowerCase()); // here it will convert into lower case
// find charecter through index position
//--------------------------------------------

console.log(fruit.charAt(2)); // here through index number we can access the charecter

console.log(fruit[2]); // above code and this code work same
// split is use to split the string
//-----------------------------------

console.log(fruit.split('')); // here it will convert the each charecter of the string in to a string i.e. "b","|a","n",....
// split the string into array 
// ------------------------------------

console.log(fruit.split(',')); // it will convert the string into array i.e split in a single array

var fruits = 'banana, apple, oranges, blackberry';
console.log(fruits.split(',')); // another example of above CODE
// split 
//-------------------

console.log(fruits.split(',')); // split by comma

console.log(fruits.split('')); // split by charecter
// Array......
//---------------------------

var moreFruits = ['banana', 'apple', 'oranges', 'pineapples'];
console.log(moreFruits); // array decleration

var sec_moreFruits = new Array('banana', 'apple', 'oranges', 'pineapples');
console.log(sec_moreFruits); // Array decleration by another way
// chech length of both array

console.log(moreFruits.length);
console.log(sec_moreFruits.length);
console.log(moreFruits[1]); // access first index from this array
// access each index of array by using for loop
//---------------------------------------------------

for (var i = 0; i < moreFruits.length; i++) {
  console.log(moreFruits[i]);
} // array common method
//-----------------------------


console.log('Array to string: ', moreFruits.toString()); // converst array into String

console.log(moreFruits.join('-')); // join every element of array by '-'

console.log(moreFruits.join(' * ')); // join every element of array with '*'

console.log(moreFruits.pop(), moreFruits); // by using pop() we can pop the last element of the array.

console.log(moreFruits.push('blackberries'), moreFruits); // by using push() we can push the last element of the array.

addFruit = moreFruits[moreFruits.length] = 'grapes'; // add item at last index

console.log(moreFruits);
console.log(moreFruits.shift()); // remove first item in the array

console.log(moreFruits);
console.log(moreFruits.unshift('kiwi')); // add element in the first position.

console.log(moreFruits); // combine two arrays
//----------------------------------

var vegetables = ['asparagus', 'tomato', 'broccol']; // decleare another array

var allGroceries = moreFruits.concat(vegetables); // here we combine two arrays

console.log(allGroceries); // slice the array
//-----------------------------

console.log(allGroceries.slice(1, 4)); // it will take array from 1st index to 3rd index
// reverse the array
//--------------------------------

console.log(allGroceries.reverse()); // it will reverse the arrays
// sort the array
//----------------------------------

var SomeNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 344, 321];
console.log(SomeNumbers.sort()); // it wll sort the array

/*                                     -------------------
                                       |      END         |
                                       -------------------                                  
//```````````````````````````````````````````````````````````````````````````````````````````````````````````*/