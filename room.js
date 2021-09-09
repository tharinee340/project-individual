const {searchType, room_type} = require('./room_type');
let reg_number = /^[a-zA-Z]{1}\d{3}$/; 
let reg_price = /^\d+$/;
let reg_type = /^[1-5]$/;
let reg_description = /\w/;
let reg_id = /^\d+$/;

//const { prototype } = require("events");

var room = []
room.push({ room_id: 1, number: "A101", price: 2000, type: 1, descript: "no view"})
room.push({ room_id: 2, number: "A102", price: 3000, type: 1, descript: "sea view"})
room.push({ room_id: 3, number: "A201", price: 3000, type: 2, descript: "sea view"})
room.push({ room_id: 4, number: "A301", price: 7500, type: 3, descript: "mountain view"})
room.push({ room_id: 5, number: "B101", price: 2000, type: 1, descript: "no view"})
room.push({ room_id: 6, number: "B102", price: 3000, type: 2, descript: "sea view"})

//เอาไอดี room ไปเช็คค่า typeid แล้วเอาชื่อของ type มาใส่แทน
checkType = () => {
    room.forEach((room) => { 
        room_type.forEach((type) => {
            if (room.type == type.id) {
                room.type = type.type_name;
            }
        })
    })
    console.table(room)
}
checkType()


let id = 6;

addRoom = (number, price, type, description) => {
    if ( (reg_number.test(number) && reg_price.test(price) && reg_type.test(type) && reg_description.test(description)) == true ) {
        let similar_number = false;
        room.forEach((room) => {
            if(room.number == number) {
                console.log("Sorry: this room number already have.\nPlease change room number!");
                similar_number = true;
            } 
        })
        if (similar_number == false) {
            id++;
            room.push({ room_id:id, number: number, price: price, type: type, descript: description});
            checkType();
            return room;
        } else if (similar_number == true) {
            throw "Sorry: this room number already have.\nPlease change room number!";
        }
    } else {
        throw "Your input have something wrong, please try again.";
    }
    
}

deleteRoom = (room_id) => {
    if ( reg_id.test(room_id) == true ) {
        let similar_id = false;
        let achieve_index;
        room.forEach((room) => {
            if (room.room_id == room_id) {
                similar_id = true;
            }
        })
        achieve_index = room.findIndex(room => room.room_id == room_id)
        console.log(achieve_index);
        if (similar_id == true) {
            
            room.splice(achieve_index,1); //ลบออก
            return room;
        } else if (similar_id == false) {
            throw "NOT HAVE: room id that you input";
        }
    } else {
        throw "Your input have something wrong, please try again.";
    }
}


showRoom = () => {
    console.table(room)
}

module.exports = {
    addRoom: addRoom,
    showRoom: showRoom,
    deleteRoom: deleteRoom,
    room: room

}
