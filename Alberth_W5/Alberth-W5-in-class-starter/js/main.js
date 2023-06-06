//This is a toDo list app, that saves the entries from a form in the UI (HTML)

console.log('test')

//ID names from html===============================================

//Input box: userInput
//button: addItem
//output: outputArea


//.value gets the value from an inputbox. but first we need an event
//console.log(userInput.value)


//EVENTS
// addItem.addEventListener("click", function(){
//     console.log(userInput.value)
// })

// addItem.addEventListener("click", function(){
//     let value = userInput.value
//     outputArea.innerHTML = value
// })



// addItem.addEventListener("click", function(){
//     let value = userInput.value
//     outputArea.innerHTML = `<h1>${value}</h1>`
// })

// addItem.addEventListener("click", function(){
//     let value = userInput.value
//     addItem.innerHTML = value
// })

let greetingArr = []

addItem.addEventListener("click", function(){
    
    let resut = ""
    let inputVal = userInput.value
    //
    greetingArr.push(inputVal)

    for(let i = 0; i < greetingArr.length; i++){
        resut += `<h1>${greetingArr[i]}</h1>`
    }
    outputArea.innerHTML = resut
})
//
//
//
