// const Room = function(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
// }

// //แยกออกมาเพื่อให้สามารถเรียกค่าได้ไวขึ้น
// Room.prototype.getAllRoom = function() {
//     return `${this.id} ${this.name} ${this.price}`;
// }

// var person_a = new Room('1', 'Sherlyn', 'A');
// console.log(person_a.getFullName())

var room = []
room.push({ room_id: 1, number: "A101", price: 2000, type: "room_type", descript: "no view"})
room.push({ room_id: 2, number: "A102", price: 3000, type: "room_type", descript: "sea view"})
room.push({ room_id: 3, number: "A201", price: 3000, type: "room_type", descript: "sea view"})
room.push({ room_id: 4, number: "A301", price: 7500, type: "room_type", descript: "mountain view"})
room.push({ room_id: 5, number: "B101", price: 2000, type: "room_type", descript: "no view"})
room.push({ room_id: 6, number: "B102", price: 3000, type: "room_type", descript: "sea view"})

let id = 6;


addRoom = (number, price, type, description) => {
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
        return room;
    } else if (similar_number == true) {
        throw "Sorry: this room number already have.\nPlease change room number!";
    }
}


showRoom = () => {
    console.table(room)
    // room.forEach((allRoom) => {
    //     console.table(allRoom);
    // })
}
 showRoom()

module.exports = {
    addRoom: addRoom,
    showRoom: showRoom

}
