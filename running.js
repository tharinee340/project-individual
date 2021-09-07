const { fstat } = require('fs');
var http = require('http');
var url = require('url');

const {addRoom, showRoom} = require('./room.js');

showRoom();

http.createServer(function (req, res) {

    var require_path = url.parse(req.url, true);
    var message = '';
    var status = 200;
    var data = '';

    switch(require_path.pathname) {
        case 'addRoom':
            try {
                addRoom(require_path.query.number, require_path.query.price, 
                        require_path.query.type, require_path.query.description);
                message += `Room number ${require_path.query.number} has been added`
            }catch(err) {
                status = 400;
                message += (err, 'something went wrong, please try agian!')
                console.log(err);
            }
            break;
            default: 
                status = 404
                message = 'path not found!'
            break;
    }
    let access_log = (new Data()).toISOString() + `${request_path.path}\n`;
    fs.appendFile('access.log', access_log, (err) => {
        if(err) {
            throw err;
            console.log(err);
        } 
    })
    let response_objects = {
        status: status,
        message: message,
        data: data
    }

    res.writeHead(status, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(response_object));


}).listen(8080);
console.log('Inventory system is running on port 8080.');