console.log(`Test`)

// Make a function that adds five to a golbal variable.

// function addFive (num = 0){
//     num = 5
//     console.log(num)
// }

// addFive()

// num = 7

// function addFive (){
//     console.log(num = num + 5)
// }

// addFive()

//Functions are programs or stepd by step instructions packaged together.

//Jello Recipe
//Exercise 2:
//Remember our Jell-O recipe? Make a function called ‘jelloRecipe’ that logs to the console:
//“This recipe uses cherry Jell-o and bananas to make a centerpiece for 10 people."

// function jelloRecipe (){
//     console.log(`“This recipe uses cherry Jell-o and bananas to make a centerpiece for 10 people."`)
// }

// jelloRecipe()


//Funcion with parameters

// function jelloRecipe (fruit, flavour, peopleNum){
//     console.log(`“This recipe uses ${flavour} Jell-o and ${fruit} to make a centerpiece for ${peopleNum} people."`)
// }

// let numArr = [1, 2, 3]
// jelloRecipe(numArr, "mango", 45)
// jelloRecipe("lemon", "grape", 29)
// jelloRecipe("tomato", "grape", 93)
// jelloRecipe("cherry", "carrot", 23)
// jelloRecipe("peach", "banana", 39)
// jelloRecipe("papaya", "lime", 35)

//Parameters are used in the function ONLY

//We can return values using the kweyword return

//We would do this if we wanted to pass a value or maybe a string or something...

function addedNum(num){
    let sum = num + 2
    return sum
}

let number = addedNum(30)

console.log(number)

