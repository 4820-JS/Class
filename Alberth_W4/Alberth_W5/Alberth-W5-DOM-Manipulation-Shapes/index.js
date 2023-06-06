console.log("test")

// Select all shapes on the page, you get an array back
// let shapes = document.querySelectorAll(".shape")
// shapes[2].style.backgroundColor = "pink"

// select the first div element on the page:
// console.log(document.querySelector(".shape"))
// document.querySelector(".shape").style.backgroundColor = "yellow"

// select an element with an id:
// console.log(document.getElementById("two"))
// document.getElementById("two").style.backgroundColor = "red"

// select the button and change the text inside the tag
// document.querySelector("button").innerHTML = "Click Me!"

//==================================================================

// //'document' is necesary ate the beginning to select something

// //

// document.querySelectorAll('div')

// //to get every <div> back in a array 
// console.log(document.querySelectorAll('div'))
// //to get an specific <div> we put the index
// console.log(document.querySelectorAll('div')[1])

// //querySelector
// document.querySelector('.shape')
// console.log(document.querySelector('.shape'))


// //something 

// document.getElementById('four')
// console.log(document.getElementById('four'))

//querySelector

// document.getElementsByClassName('three shape').style.backgroundColor = 'red'
console.log(document.getElementsByClassName('shape three'))

//Style

let select = document.getElementsByClassName('three')[0]

select.style.backgroundColor = 'black'

document.getElementById('one-shape').style.backgroundColor = 'blue'

//Shortcut for ID Names 
two.style.backgroundColor = 'hotPink'

//you dont need to write out document.


//inner cahnges the value between the tags of something
document.querySelector('button').innerHTML = "Hi"


