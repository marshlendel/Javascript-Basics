//The more you work with JavaScript, the more you begin to realize how important objects are

//An object is a data type that allows us to store a collection of properties and methods

let zelda = {
    name: "Zelda", //name is the property and "zelda" is the value
    age:17,
    title: "Princess",
    isCaptured:true

};

let player = {
    username: "marshlendel",
    power: "fire",
    toughness:57
};

let friend = {
    friendAge: 23,
    homeTown: "Indy",
    favColor: "red",
    isFunny: true
};

let movie = {
    genre: "action",
    length: "120 minutes",
    actors: ["Johnny Depp", "Brad Pitt", "RDJ"]
};

let music = {
    genre: "alternative",
    instruments: ["guitar", "drums", "bass"],
    isDope: true
};




//Use dot notation to access the property values of the object
console.log(friend.homeTown);
console.log(movie.actors[2]);
console.log(music.genre);