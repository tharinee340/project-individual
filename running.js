var http = require('http');
var url = require('url');

const {addRoom, showRoom, deleteRoom} = require('./room.js');

showRoom();

http.createServer(function (req, res) {

    var require_path = url.parse(req.url, true);
    var message = '';
    var status = 200;
    var data = '';

    switch(require_path.pathname) {
        case '/addRoom':
            try {
                addRoom(require_path.query.number, parseInt(require_path.query.price), 
                        require_path.query.type, require_path.query.description);
                message += `Room number ${require_path.query.number} has been added.`
                //data = showRoom(); ยังไม่รู้จะใส่ยังไง
                showRoom();
            }catch(err) {
                status = 400;
                message += (err)
                console.log(err);
            }
            break;
        case '/deleteRoom':
            try {
                deleteRoom(require_path.query.room_id);
                message += `Room id ${require_path.query.room_id} has been deleted.`
                showRoom();
            }catch(err) {
                status = 400;
                message += (err)
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