/**
* Exercise 1:
* Declare variables named favBreakfast, favLunch, and favDinner.
* Each variable should:
*   - store a string data type.
*   - have a value of your favorite meal.
*/
meals = [favBreakfast, favLunch, favDinner];
var favBreakfast = 'waffles';
var favLunch = 'mealprep';
var favDinner = 'steak and broccoli';
var mySkills = [
    {
        name: "Guitar",
        learned: true
    },
    {
        name: "Software Engineering",
        learned: false
    },
    {
        name: "Mechanic",
        learned: false
    }
];
var myPerson = {
    id: 4,
    name: "Ryan",
    skills: [
        {
            name: "Guitar",
            learned: true
        }
    ]
};
// --------------------------------------------------------------------------
// To test your solution, uncomment the following line and run `node app.js`
// console.log(`-----------\nExercise 3:\n-----------\nmyPerson:\n${JSON.stringify(myPerson, null, 2)}\n`)
// --------------------------------------------------------------------------
/**
* Exercise 4:
* Write a function named feedPerson that accepts the following parameters:
*   - the 3 variables from Exercise 1
*   - myPerson
* The function should add each of the variables to the meals array.
* The function should not return anything.
*/
function feedPerson(favBreakfast, favLunch, favDinner, myPerson) {
    myPerson.meals = [favBreakfast, favLunch, favDinner];
    return;
}
// --------------------------------------------------------------------------
// To test your solution, uncomment the following lines and run `node app.js`
// feedPerson(favBreakfast, favLunch, favDinner, myPerson)
// console.log(`-----------\nExercise 4:\n-----------\nmyPerson:\n${JSON.stringify(myPerson, null, 2)}\n`)
// --------------------------------------------------------------------------
/**
* Exercise 5:
* Write a function named teachPerson that accepts the following parameters:
*   - myPerson
*   - an array with type Skill
* The function should add each of the skill objects to the skills array.
* The function should not return anything.
*/
function teachPerson(myPerson, type) {
}
// --------------------------------------------------------------------------
// To test your solution, uncomment the following lines and run `node app.js`
// teachPerson(myPerson, mySkills)
// console.log(`-----------\nExercise 5:\n-----------\nmyPerson:\n${JSON.stringify(myPerson, null, 2)}\n`)
// --------------------------------------------------------------------------
/**
* Exercise 6:
* Write a function named getRandomSkill that accepts the following parameters:
*   - myPerson
* The function should return a random element from the skills array
*/
function getRandomSkill(myPerson) {
    return;
}
// --------------------------------------------------------------------------
// To test your solution, uncomment the following line and run `node app.js`
// console.log(`-----------\nExercise 6:\n-----------\nRandom Skill:\n${JSON.stringify(getRandomSkill(myPerson), null, 2)}\n`)
// --------------------------------------------------------------------------
