
console.log('test')

// date picker function ==== IGNORE CODE BELOW ===
$(function () {
	var dp1 = $('#dp1').datepicker().data('datepicker');
	dp1.selectDate(new Date());
	var dp2 = $('#dp2').datepicker().data('datepicker');
	dp2.selectDate(new Date());
})

//ID names

// name imput: userName
// phone input: userPhone
//checkin date: checkInDate
//checkout date: checkOutDate
//adults: guestAdultSelect
// children: guestChildrenSelect
//button: bookRoom
//checkbox


let hotelArr = []
let hotelObj = []
bookRoom.addEventListener("click",function(e){
	e.preventDefault()
	// console.log("Click")
	hotelObj={
		name: userName.value,
		phone: userPhone.value,
		checkin: checkInDate.value,
		checkout: checkOutDate.value,
		adults: guestAdultSelect.value,
		children: guestChildrenSelect.value
	}
	hotelArr.push(hotelObj)
	console.log(hotelArr)

		for (let i = 0; i < hotelArr.length; i++) {
			let row = content.insertRow(0)

			let cell1 = row.insertCell(0)
			let cell2 = row.insertCell(1)
			let cell3 = row.insertCell(2)
			let cell4 = row.insertCell(3)
			let cell5 = row.insertCell(4)
			let cell6 = row.insertCell(5)
			
			cell1.innerHTML = hotelArr[i].name
			cell2.innerHTML = hotelArr[i].phone
			cell3.innerHTML = hotelArr[i].checkin
			cell4.innerHTML = hotelArr[i].checkout
			cell5.innerHTML = hotelArr[i].adults
			cell6.innerHTML = hotelArr[i].children

		}
}
)



//========================================================================//
// // === Ignore Above Code ===

// // OBJECTS!!!

// // Variables = properties
// // Functions = methods

// // Example
// // key = rooms
// // value = 40



let hotel = {// define the object
	name: "Fancy Pants",//dfine the propietie name
	rooms: 45,//define the propietie room
	bookings: 21,
	gym: true,
	pool: true,
	availableRooms: function () { //define a method
		console.log("yes")
	},
	booking: function () {
		this.bookings++//add 1 room
	},
	canceling: function () {
		this.bookings--//substract 1 room
	},
	checkAvailability: function () {
		let emptyRooms = this.rooms - this.bookings
		if (emptyRooms >= 1) {
			console.log(`There are ${emptyRooms} left`)//Print out the # of room available
		} else {
			console.log("Go away")
		}
	}
}


// //For OBJECTS only


// //For ...in loops
// //use for objects to loop through and print out all the values or keys

for (key in hotel){
	console.log(key)//print out name of propieties (key)
	console.log(hotel[key])//print out the value
}

hotel.booking()//1 rom
console.log(hotel.bookings)// print out the # of bookings
hotel.booking()//1 rom
hotel.booking()//1 rom
hotel.booking()//1 rom
hotel.booking()//1 rom
hotel.booking()//1 rom
console.log(hotel.bookings)// print out the # of bookings
hotel.checkAvailability()// print out if there is any available room

console.log(hotel.name)
//Fancy Pants
console.log(hotel.gym)
//true
console.log(hotel.availableRooms())
//yes
hotel.availableRooms()
//yes


// hotel.gym = false//redefine gym value

// console.log(hotel.gym)
// //false

// console.log(hotel.checkAvailability())


let opt = document.createElement("option")
// opt.text = "0"
opt.innerHTML = "0"
opt.value = 0

// guestChildrenSelect.add(opt)
guestChildrenSelect.prepend(opt)











