//Allow the user to input as many fruit selections as they like.
// Output a summary of their purchases every time they press the 
// submit button, to the output area. 

// The format should list the subtotal amount before tax, the amount of tax 
// in dollars, and the final total amount with tax. 
// For example:
// ==============
// Subtotal: $2.50
// Tax (10%): $0.25
// Total: $2.75

console.log("test")


//IDs
//name input: name
//quantity input: quantity
//price input: price
//tax input: taxPercent
//button: submitBtn
//output area: outputArea

let fruitTotal=[]
let outpuStr = ""

submitBtn.addEventListener('click', function(e){
    e.preventDefault() //stops reloading
    // console.log('easfd')
    let fruitQuant = Number(quantity.value) 
    let fruitPrice = Number(price.value)
    let fruitTax = Number(taxPercent.value)
    console.log(fruitPrice)
    console.log(fruitTax)
    console.log(fruitQuant)

    let subtotal = fruitPrice * fruitQuant
    let taxAmount = (fruitTax/100)* subtotal
    let total = subtotal + taxAmount
    console.log (total.toFixed(2))
    console.log(total)
})














