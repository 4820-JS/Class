// Please read and follow the instructions in the HTML file. 
// Remember, I can read your comments, but I can't read your mind.

// ===================== PART ONE ================================
// |                    15 Points                                |
// ===============================================================
// Translation logic (15):
    // Event listener and output (5), 'translation' of a string logic (10)


// ID NAMES:
let one = ''
//create an event to attach an event handler to the bottom
nameSubmit.addEventListener("click", function(e){
    e.preventDefault() //Prevents the default form submission behavior
    if(customerName.value.length > 0 && planetResidence.value.length > 0){//Check if the box is NOT empty
        let name = customerName.value
        let planet = planetResidence.value
        one = planet
        if (planet === "Saturn"){//Check if is saturn
            console.log((name.replace('A', 'AA').replace('a', 'aa')))
            // outputArea.innerHTML = `Not a Number`//message
            // amount.value = ``//empty the box
        }if (planet === "Jupiter"){//Check if is Jupiter
            nameTranslate.innerHTML =  (name.replace(/[A,E,I]/g, 'OO').replace(/[a,e,i]/g, 'oo'))
        }if (planet === "Venus"){//Check if is Venus
            nameTranslate.innerHTML =  (name.replace(/[A,E,I]/g, 'U').replace(/[a,e,i]/g, 'u'))
        }if (planet === "Mars"){//Check if is Mars
            nameTranslate.innerHTML =  (name.replace(/[A,E,I,O,U]/g, '').replace(/[a,e,i,o,u]/g, ''))
        }
    }else{//If the box is empty
        nameTranslate.innerHTML = `Type something`//message
        }
})



// ===================== PART TWO ================================
// |                    20 Points                                |
// ===============================================================
// Add toppings logic (15): 
    // Event listener and output (5), saving and finding values (5), subtotal calculation (5)
    //      • Use Switch with fall through for full marks on subtotal calculation section (5)
    //      • Use Switch without fall throughs for partial marks on subtotal calculation section (3)
    //      • Use If/Else for partial marks on subtotal calculation section (2)
// Reset logic (5)


// ID NAMES:


let totalct = 0
let totalpt = 0
let two = 0

//create an event to ttach an event handler to the bottom
addTopping.addEventListener("click", function(e){
    e.preventDefault()//Prevents the default form submission behavior
 
    if(topping.value.length > 0 ){//Check if the box is NOT empty

        let toppingsArr = [] // Array to storage alltoppings
        let ct = [`Mushrooms`,`Red Pepper`,`lob Goo`,`Ground Mars Beef`,`Black Olives`, `Pineapple`]
        let pt = [`Anchovies`,`Space Slime`,`Feta Cheese`,`Spinach`,`Spicy Moon Dust`,`Oxygen dip`]
        let list = ""
        let top = topping.value

        toppingsArr.push(top)//Push the value of the box onto the toopingArr
        if (ct.includes(top) ){
            totalct = totalct + 1
            let total = (totalct*2.23) + (totalpt*5.48)
            toppingOutput.innerHTML = total + 10.99
            two = total + 10.99
        }if (pt.includes(top)){
            totalpt = totalpt + 1
            let total = (totalct*2.23) + (totalpt*5.48)
            toppingOutput.innerHTML = total + 10.99
            two = total + 10.99
        }
  
    }else{//If the box is empty
        toppingOutput.innerHTML = `Type something`//message
    }
})

resetBtn.addEventListener("click", function(e){
    totalct = 0
    totalpt = 0
    two = 0
    toppingOutput.innerHTML = `Reset is successful. `
})




// ===================== PART THREE ==============================
// |                    15 Points                                |
// ===============================================================
// Order summary logic (15):
    // Event listener and output (5), tax, tip and currency calculations (10)

// ID NAMES:

//create an event to ttach an event handler to the bottom
calcBill.addEventListener("click", function(e){
    e.preventDefault()//Prevents the default form submission behavior
    let tax = two * (taxPercentId.value/100)
    let tip = two * (tipPercentId.value/100)
    let deli = 0
    let totalaPlanet = 0

    if (one === `Venus`){
        deli = 3.98
        totalaPlanet = (two+tax+tip+deli)*0.91
    }if (one === `Mars`){
        deli = 5.57
        totalaPlanet = (two+tax+tip+deli)*0.38
    }if (one === `Jupiter`){
        deli = 59.19
        totalaPlanet = (two+tax+tip+deli)*2.34
    }if (one === `Saturn`){
        deli = 120.43
        totalaPlanet = (two+tax+tip+deli)*1.06
    }
    // let toww = two

    if (taxPercentId.value > 0){
        billSummary.innerHTML =
        `Tax amount, ${tax.toFixed(2)}<br>
        Tip amount, ${tip.toFixed(2)}<br>
        Delivery cost, ${deli.toFixed(2)}<br>
        Total in EHD, ${(two+tax+tip+deli).toFixed(2)}<br>
        Total in the person's home planet dollars, ${totalaPlanet.toFixed(2)}<br>
        `
    }
}
)









// ===================== BONUS ===================================
// | REMEMBER, THIS WILL ONLY COUNT IF THE REST OF THE EXAM IS   |
// | COMPLETED                                                   |
// |                    3 Points                                 |
// ===============================================================