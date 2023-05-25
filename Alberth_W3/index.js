//console.log("test")

//Week 3 - arrays and loops

//arrays are like lists or a variable that contains multiple values.
//arrays use square brackets.

//let colurlist = ["red" ,"blue" ,"purple" , "yellow" , "fushia"]

//Javascript is a zero counting language.

// console.log(colurlist[0])
// console.log(colurlist[1])
// console.log(colurlist[2])
// console.log(colurlist[3])
// console.log(colurlist[4])

//Arrays have methods. A good source for it is mdn (mozilla developer network), google: "mdn array methods javascript"
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

//We will be using most often ".length", "push", "pop"

// let colurlist = ["red" ,"blue" ,"purple" , "yellow" , "fushia"]

// console.log(colurlist.length)

// console.log(colurlist.push("black"))

// console.log(colurlist.length)

// console.log(colurlist[5])


// console.log(colurlist[0])
// console.log(colurlist[1])
// console.log(colurlist[2])
// console.log(colurlist[3])
// console.log(colurlist[4])
// console.log(colurlist[5])

//the index of 6 prints out undifined, because, there is nothing at the "index of 6", or said another way, we don't have 7 items in the array.
//
// console.log(colurlist[6])

//we have 1-D arrays:
// let base1D = [1, 2, 30]
// let base2D = [[1, 2, 3],[4, 5, 6],[7, 8, 9],base1D]

//Arrays are also datatypes.

//console.log(base2D[3][2])

// Loops are a way to iterate or loop through an array or a set of values.
//while loops are a way to loop through
//print out the numbers from 0 - 100
//let counter = 0

//if we want to go to 100 to be printed out we need counter <=100 or counter <101 dealer's choice.

// while (counter < 101){
//     console.log(counter)
//     counter = counter + 1
// // }


// while (counter < 101){
//     console.log(counter)
//     counter += 1 
// }


// while (counter < 101){
//     console.log(counter)
//     counter ++ 
// }

//Using while loop, print out the numbers 1 - 10, if they are odd, print "odd", if even, print,"even"

// let counter2 = 0

// while (counter2 < 11){
//     if(counter2%2 === 0){
//         console.log(counter2 +" even")
//     }else{
//         console.log(counter2 +" odd")
//     }
// counter2 ++
// }


//do while is much the same, except it is backwards.
//let's print out numbers from 50 to 0 in a do while.
//the iteraitos is the same, it still needs to be made.

// let i = 10

// do{
//     console.log(i)
//     i--
// }while (i>=0)

// The king of loops: the for loop
//For loops allows for everything to be present in one place

// for(let i = 0; i<51; i++){
//     console.log(i)
// }

// for .. of is used as a shorcut for array only 

// let colurlist = ["red" ,"blue" ,"purple" , "yellow" , "fushia"]

// for(let i = 0; i < colurlist.length; i++){
//     console.log(colurlist[i])
// }

// colurlist.push("black")
// here is the shortcut

// for(item of colurlist){
//     console.log(item)
// }

//Without using string methods, (NO: join, reverse, split), write some code that reverses a string. HINT: string are arrays.

let string = "LANGARA"

//console.log(string.length)
for (let i = string.length-1; i>=0; i--){
    console.log(string[i])
}

let revString=""

for (let j = string.length-1; j>=0; j--){
    revString += string[j]
}
console.log(revString)
