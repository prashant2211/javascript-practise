// Creating  a function
// first we create a function and then we call the function

// ********************************************************************************

function fun()
{
    var name = prompt("Enter your name: ");
    console.log("hello"+' '+name);

}

fun();  // calling a function

// function return arguments

function addnum(num1, num2)  // here function have 2 argument.
{
    var result = num1 + num2;
    console.log(result);
}
addnum(10, 20);

// another example of function arguments

function greeting(yourName) {
    var result = 'hello' + ''+ yourName
    console.log(result);
}
var name = prompt('your name');
greeting(name);