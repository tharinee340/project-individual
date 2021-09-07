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
room.push({ number: "A101", price: 2000, type: "room_type", descript: "no view"})
room.push({ number: "A102", price: 3000, type: "room_type", descript: "sea view"})
room.push({ number: "A201", price: 3000, type: "room_type", descript: "sea view"})
room.push({ number: "A301", price: 7500, type: "room_type",descript: "mountain view"})
room.push({ number: "B101", price: 2000, type: "room_type", descript: "no view"})
room.push({ number: "B102", price: 3000, type: "room_type", descript: "sea view"})

addRoom = (number, price, type, description) => {
    room.forEach((room) => {
        if(room.number == number) {
            console.log("Sorry: this room number already have.\nPlease change room number!")
        } 
        // else if (room.number != number) {
        //     room.push({number: number, price: price, type: type, descript: description})
        // }
    })
}
addRoom('A101',5200,'room_type','no viewwwwwww')

showRoom = () => {
    console.table(room)
    // room.forEach((allRoom) => {
    //     console.table(allRoom);
    // })
}
// showRoom()

module.exports = {
    addRoom: addRoom,
    showRoom: showRoom

}
