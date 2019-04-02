

/*----------------------------------------------------
This is a variable in which i am storing my name.
var is the keyword, fullName is the name of the 
variable, = sign is the assignment operator and 
'Jason Sims' is the value. In order to invoke 
this variable I used console.log(fullName). */

var fullName = 'Jason Sims';
console.log(fullName)

/*----------------------------------------------------
Another way to declare a variable is to use the
const keyword. The const variable can not be 
changed once it has been declared. */

const numberOfStates = '50';
console.log(numberOfStates);

/*----------------------------------------------------
This function takes in two numbers, and then it 
adds them together and it returns the answer to 
what invoked the function. The function is a block 
of code designed to preform a particular task. 
The code in this block has been named add and its
the name we use to invoke the function and can do 
so as many times as we need. This return statement 
returning the value which is the calulation of 
5 + 4 */

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 4));

/*----------------------------------------------------
This is another function which is the same concept 
as before only it is preforming a different task
here creating an alert box to say Hello World! */

function sayHello() {

    alert('Hello World!')

}
sayHello();

/*----------------------------------------------------
 This function creates a way to determine if 
 Charles, Abby, James, and John are old enough
 to view this webpage. It does this by utilizing
 an if statement and the functions name. If these
 four people are under the age of 21 an alert box 
 will appear letting them know they are not old 
 enough. It caluclates the answer by using the 
 parameters in the function, and the condition of the
 if statement. It then gives the answer when you 
 call the name which is checkAge and when the 
 parameters have been invoked by specific names and
 ages. */

function checkAge(name, age) {

    if (age < 21) {

        alert('Sorry ' + name + ', you arent old enough to view this page!')
    }

}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

/*---------------------------------------------------
Here we have created an array and we have used a for 
loop to show each of the strings in the developer
console. For loops, loops through a block of code a 
number of times depending on the condition. The for
loop has three parts: the starting point, the 
condition on when your loop should end, and the
incremeter or decremeter. Within the curly braces is
where you place your block of code. In this case we
are just console.logging the name of the string along
with [i] which is how you get the names of your 
vegatables to start starting with 0 or Bell Peppers.*/

var favoriteVegatables = ['Bell Peppers', 'Corn', 'Spinach', 'Potatoes']

for (var i = 0; i < favoriteVegatables.length; i++) {

    console.log(favoriteVegatables[i])

}

/*-------------------------------------------------- 
This is another array only instead of strings being
in the array we have objects being in the array. You
can tell there are objects in this array because 
there are properties within the curly braces. */

var friends = [
    {
        name: 'Lisa',
        age: 38,
    },
    {
        name: 'Jay',
        age: 42,
    },
    {

        name: 'Randall',
        age: 43,
    },
    {
        name: 'Scott',
        age: 20,
    },

    {
        name: 'David',
        age: 20,
    }]

/*-------------------------------------------------- 
This is another for loop in which we our calling our
checkAge function that we have created before and 
connecting the name and value of the objects in the 
array into the parameters(?) of the for loop. */

for (var i = 0; i < friends.length; i++) {

    var name = friends[i].name;
    var age = friends[i].age;
    checkAge(name, age);

}

/*-------------------------------------------------
This getLength function returns the number of 
characters in  'Hello World!' with the use of the len
variable calling the function of getLength. The if 
statement is connected to the variable through the
variables name which is len. The if statement figures 
out whether or not the number of characters 'Hello World'
has by (len % 2 == 0) 0 is an even number and the remainder
of 11 % 2 isnt even so it passes the first if statement
and goes on to the else statement.
*/
function getLength (helloWorld) {
    return helloWorld.length

}

var len = getLength ('Hello World')

if (len % 2 == 0) {
    console.log ('The world is nice and even!');
} else {
    console.log ('The world is an odd place!');
}