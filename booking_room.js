const {addRoom, showRoom, deleteRoom, room} = require('./room.js');
let reg_id = /^\d+$/;
let reg_room_id = /^\d+$/;
let reg_checkin_date = /^\d{4}-\d{2}-\d{2}$/;
let reg_checkout_date = /^\d{4}-\d{2}-\d{2}$/;

var booking_room = []
booking_room.push({id: 1, room_id: 1, booking_id: 1, checkin_date: "2014-12-01", checkout_date: "2016-07-04", price: 0});
booking_room.push({id: 2, room_id: 3, booking_id: 2, checkin_date: "2015-06-08", checkout_date: "2020-08-06", price: 0});
booking_room.push({id: 3, room_id: 4, booking_id: 3, checkin_date: "2016-11-02", checkout_date: "2026-12-04", price: 0});
booking_room.push({id: 4, room_id: 6, booking_id: 1, checkin_date: "2015-09-03", checkout_date: "2011-10-01", price: 0});

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
    if ( (reg_id.test(id) && reg_room_id.test(room_id) && reg_checkin_date.test(checkin_date) && reg_checkout_date.test(checkout_date)) == true) {
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
    } else {
        throw "Your input have something wrong, please try again.";
    }
    
    
}



module.exports = {
    edit_booking_room: edit_booking_room,
    booking_room: booking_room
}