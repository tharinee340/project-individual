const {addGuest,showGuest,guest} = require('./guest');
const {booking_room} = require('./booking_room');
let reg_id = /^\d+$/;

var booking = []
booking.push({booking_id: 1, guest_id: 1, guest_name: '', total_price: 0})
booking.push({booking_id: 2, guest_id: 2, guest_name: '', total_price: 0})
booking.push({booking_id: 3, guest_id: 3, guest_name: '', total_price: 0})


//วนลูปหาไอดีของแขกแล้วเอาชื่อมาใส่
checkGuest = () => {
    booking.forEach((booking) => { 
        guest.forEach((guest) => {
            if (booking.guest_id == guest.id) {
               booking.guest_name = `${guest.firstname} ${guest.lastname}`
            }
        })
    })
    console.table(booking)
}
checkGuest();

checkTotalPrice = () => {
    let ttPrice = 0;
    booking.forEach((booking) => {
        ttPrice = 0;
        booking_room.forEach((booking_room) => {
            if ( booking.booking_id == booking_room.booking_id) {
                ttPrice += booking_room.price;
                booking.total_price = ttPrice;
            }
        })
    })
}
checkTotalPrice();



let id = 3
showBooking = (guest_id) => {
    let check_id = reg_id.test(guest_id)
    let hasBooking = false
    let index = 0
    let saveIndex;
    console.log(check_id)
    if(check_id == true) {

        booking.forEach((booking) => {
            if (booking.guest_id == guest_id) {
                saveIndex = index;
                hasBooking = true;
            }
            index++
        });

        if (hasBooking == true) {
            checkGuest();
            checkTotalPrice();
            return booking[saveIndex];
            
        } else {
            throw 'Sorry this guest id not booking yet.'; ///
        }
        
    } else {
        throw 'Your id must be only integer, please try again.'
    }
    
}


showAllBooking = () => {
    checkGuest();
    checkTotalPrice();
    return booking;
}

module.exports = {
    showBooking: showBooking,
    showAllBooking: showAllBooking
}
