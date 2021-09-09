var http = require('http');
var url = require('url');
var fs = require('fs');

const {addRoom, showRoom, deleteRoom,room} = require('./room.js');
const {addGuest,showGuest,guest,deleteGuest} = require('./guest');
const {searchType, room_type} = require('./room_type');
const {edit_booking_room} = require('./booking_room');
const {showBooking,showAllBooking} = require('./booking');



http.createServer(function (req, res) {

    var require_path = url.parse(req.url, true);
    var message = '';
    var status = 200;
    var data = '';

    switch(require_path.pathname) {
        case '/addRoom':
            try {
                let all_room = addRoom(require_path.query.number, parseInt(require_path.query.price), 
                        require_path.query.type, require_path.query.description);
                message += `Room number ${require_path.query.number} has been added.`
                data = JSON.stringify(all_room)
                showRoom();
            }catch(err) {
                status = 400;
                message += (err)
                console.log(err);
            }
            break;
        case '/deleteRoom':
            try {
                let all_room = deleteRoom(require_path.query.room_id);
                message += `Room id ${require_path.query.room_id} has been deleted.`
                data = JSON.stringify(all_room)
                showRoom();
            }catch(err) {
                status = 400;
                message += (err)
                console.log(err);
            }
            break;
        case '/addGuest':
            try {
                let show = addGuest(require_path.query.firstname, require_path.query.lastname, parseInt(require_path.query.age),
                    require_path.query.phone_number, require_path.query.email)
                message += `The guest name ${require_path.query.firstname} ${require_path.query.lastname} has been added.`
                data += JSON.stringify(show);
                
            }catch (err) {
                status = 400;
                message += (err)
                console.log(err)
            }
            break;
        case '/deleteGuest':
            try {
                let show = deleteGuest(require_path.query.id);
                message += `Guest id ${require_path.query.id} has been deleted.`
                data += JSON.stringify(show)
            } catch (err) {
                status = 400;
                message += (err)
                console.log(err)
            }    
            break;
        case '/searchType':
            try {
                let show = searchType(require_path.query.key)
                message += `found ${show[0]} item(s)`
                data += JSON.stringify(show[1])
            } catch (err) {
                status = 400;
                message += (err)
                console.log(err)
            }
            break;
        case '/edit_booking_room':
            try {
                let show = edit_booking_room(require_path.query.id, parseInt(require_path.query.room_id), require_path.query.checkin_date, require_path.query.checkout_date);
                message += `Edit booking room is ${show.id} successful.`;
                data += JSON.stringify(show);
            } catch (err) {
                status = 400;
                message += (err);
                console.log(err);
            }
            break;
        case '/showBooking':
            try {
                let show = showBooking(parseInt(require_path.query.guest_id));
                message += 'success';
                data += JSON.stringify(show);
            } catch (err) {
                status = 400;
                message += (err);
                console.log(err);
            }
            break;
        case '/showAllBooking':
            try {
                let show = showAllBooking();
                message += 'success';
                data += JSON.stringify(show);
            } catch (err) {
                status = 400;
                message += (err);
                console.log(err);
            }
            break;
            default: 
                status = 404
                message = 'path not found!'
            break;
    }
   
    let response_objects = {
        status: status,
        message: message,
        data: data
    }

    res.writeHead(status, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(response_objects));


}).listen(8080);
console.log('Inventory system is running on port 8080.');