let reg_search = /^[a-zA-Z]+$/

var room_type = [];
room_type.push({id: 1, type_name: 'single', max_capacity_guest: 1, detail: 'A room assigned to one person.'})
room_type.push({id: 2, type_name: 'king', max_capacity_guest: 2, detail: 'A room with a king-sized bed.'})
room_type.push({id: 3, type_name: 'queen', max_capacity_guest: 2, detail: 'A room with a queen-sized bed.'})
room_type.push({id: 4, type_name: 'suit', max_capacity_guest: 4, detail: 'A parlour or living room connected with to one or more bedrooms.'})
room_type.push({id: 5, type_name: 'twin', max_capacity_guest: 2, detail: 'A room with two twin beds. May be occupied by one or more people.'})

console.table(room_type);

searchType = (key) => {
    let check_search = reg_search.test(key);
    if (check_search == true) {
        let answer = room_type.filter(type => (type.type_name.includes(key)))
        console.table(answer)
        return [answer.length, answer]
    } else {
        throw 'Your input is incorrect, please try again.'
    }
    
}

module.exports = {
    searchType: searchType,
    room_type: room_type
}
