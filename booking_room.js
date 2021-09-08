const {addRoom, showRoom, deleteRoom, room} = require('./room.js');

var booking_room = []
booking_room.push({id: 1, room_id: 1, booking_id: 1, checkin_date: "20-12-64", checkout_date: "12-07-65", price: 0});
booking_room.push({id: 2, room_id: 3, booking_id: 2, checkin_date: "01-06-64", checkout_date: "20-08-64", price: 0});
booking_room.push({id: 3, room_id: 4, booking_id: 3, checkin_date: "12-11-64", checkout_date: "26-12-64", price: 0});
booking_room.push({id: 4, room_id: 6, booking_id: 1, checkin_date: "05-09-64", checkout_date: "11-10-64", price: 0});

checkPrice = () => {
    booking_room.forEach((booking_room) => { 
        room.forEach((room) => {
            if (booking_room.room_id == room.room_id) {
               booking_room.price = room.price
            }
        })
    })
    console.table(booking_room)
}
checkPrice();

edit_booking_room = (id, room_id, checkin_date, checkout_date) => {
    let index = 0;
    let saveIndex = 0;
    let hasId = false;
    booking_room.forEach((booking_room) => {
        if(booking_room.id == id) {
            hasId = true;
            saveIndex = index;
        }
        index++;
    })
    if (hasId == true) {
        booking_room[saveIndex].room_id = room_id
        booking_room[saveIndex].checkin_date = checkin_date
        booking_room[saveIndex].checkout_date = checkout_date
        checkPrice();
        return booking_room[saveIndex];
    }else if(hasId == false) {
        throw 'Don\'t have this booking room id.'
    }
}



module.exports = {
    edit_booking_room: edit_booking_room,
    booking_room: booking_room
}