let opt1 = document.createElement("option")
opt1.innerHTML = "White"
opt1.value = "White"

let opt2 = document.createElement("option")
opt2.innerHTML = "Black"
opt2.value = "Black"

colour.add(opt1)
colour.prepend(opt2)






// submit.addEventListener("click",function(e){
//     	e.preventDefault() 

// let table = document.createElement("table")

// table.setAttribute("id" , "outputTable")

// outputArea.appendChild(table)

// let row = outputTable.innerRow(0)
// }





let fruitArr = []
let fruitObj = []
submit.addEventListener("click",function(e){
	e.preventDefault()
	// console.log("Click")
	fruitObj={
		name: furitName.value,
		colour: colour.value,
		pit: hasPit.value,
		times: eaten.value
	}

	fruitArr.push(fruitObj)
	console.log(fruitArr)

		for (let i = 0; i < fruitArr.length; i++) {
			let row = content.insertRow(0)

			let cell1 = row.insertCell(0)
			let cell2 = row.insertCell(1)
			let cell3 = row.insertCell(2)
			let cell4 = row.insertCell(3)
            
			cell1.innerHTML = fruitArr[i].name
			cell2.innerHTML = fruitArr[i].colour
			cell3.innerHTML = fruitArr[i].pit
			cell4.innerHTML = fruitArr[i].times

		}
}
)