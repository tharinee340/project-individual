
var guest = []
guest.push({id: 1,firstname: "Tharinee", lastname: "thuengnok", age: 19, phone_number: "0918575864", email: "tharinee.22@gmail.com"});
guest.push({id: 2,firstname: "Hello", lastname: "World", age: 29, phone_number: "0618575864", email: "helloworld1234@gmail.com"});
guest.push({id: 3,firstname: "Moo", lastname: "Jib", age: 28, phone_number: "0918531164", email: "moo555@gmail.com"});
guest.push({id: 4,firstname: "tep", lastname: "zaaa", age: 25, phone_number: "0681234864", email: "tepZaa55@gmail.com"});
guest.push({id: 5,firstname: "maimee", lastname: "tungka", age: 22, phone_number: "0919475864", email: "nomoney@gmail.com"});

console.table(guest);


let id = 5;

//ถ้าอายุไม่ถึงจะจองไม่ได้
addGuest = (firstname, lastname, age, phone_number, email) => {
    if (age >= 20) {
        id++;
        guest.push({id: id,firstname: firstname, lastname: lastname, age: age, phone_number: phone_number, email: email})
        return guest;
    } else {
        throw "Sorry, your age is less than 20 years old, cannot booking.";
    }
}


showGuest = () => {
    console.table(guest);
}

deleteGuest = (id) => {
    let similar_id = false;
    let achieve_index;
    guest.forEach((guest) => {
        if (guest.id == id) {
            similar_id = true;
        }
    })
    achieve_index = guest.findIndex(guest => guest.id == id)
    console.log(achieve_index);
    if (similar_id == true) {
        guest.splice(achieve_index,1); //ลบออก
        return guest;
    } else if (similar_id == false) {
        throw "No guest id in the system.";
    }
}

module.exports = {
    addGuest: addGuest,
    showGuest: showGuest,
    guest: guest,
    deleteGuest: deleteGuest
}
