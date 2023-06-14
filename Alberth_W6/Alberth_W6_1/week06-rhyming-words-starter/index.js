console.log("test")
// 1. Output to the webpage in the output area, styled in the colour, the rhyming words 
// based on the user input. 

// 2. If they do not type in a word from the list, count the number 
// of vowels in the input, and show the vowel count in the output
// area with the message: "This is not a valid colour from the list. Your vowel count is..."

// 3. If the number is too high, simply output the maximum amount available. If it is too low,
// output 1 entry. 

let blue = ["chew", "clue", "queue", "bamboo", "cashew"]
let green = ["bean", "screen", "queen", "between", "nectarine"]
let yellow = ["bellow", "cello", "fellow", "marshmallow", "morello"]
let orange = ["door hinge", "foreign", "storage", "boring", "morning"]

//id names
// color input box: colourName
// word number : wordNumber
// button: SubmitBtn
// output area: outputArea


//planning:
//1. some way to get the user input
//2. compare the input to the list of colours names (if/ else or switch)
//3. to print out the items to the website (innerhtml)
//4. a way to go through the array to print them out in a list
//5. a way to change the color from js file
// submitBtn.addEventListener("click", function(){
SubmitBtn.addEventListener("click",function(e){
    e.preventDefault()
    let colourStr = colourName.value
    console.log(colourStr)

    let num = Number(wordNumber.value)
    console.log(numStr)

    // if (colourStr === 'blue' || colourStr === 'green' || colourStr === 'yellow' || colourStr === 'orange' ){
    //     Number(num)
    // }

    //switch statement

    //copy elemnets to an empty array
    let copyArr = []
    let strResult = ''

    switch(colourStr){
        case "blue": 
            copyArr = blue
            break
        case "green":
            copyArr = green
            break
        case "yellow":
            copyArr = yellow
            break
        case "orange":
            copyArr = orange
            break
        default:
            strResult = "no sch color"
    }
            // if ( num > 5 ){
                // for (let i = 0; i < )
            // }
    
        for (let i = 0; i < num; i++){
            console.log(copyArr[i])
        }


    // function printOut(arr, num){
    //     for (let i = 0; i < arr.length; i++)
    // }

    // if (colourName.value === "blue"){
    // let value = wordNumber.value
    // console.log(blue[value])}
    // outputArea.innerHTML = blue[value]
})

