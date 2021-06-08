let character = "Wizard";

if (character === "Bard"){
    console.log("You sing nice songs.")
}else if (character === "warrior") {
    console.log("You beat things up.")
}else if (character === "Rogue") {
    console.log("You use stealth.")
}else if(character === "Wizard") {
    console.log("You use magic.")
} else {
    console.log("What type of character is this??")
}

//Order is important
//In this case where numbers are involved, you want the higher number condition at the top, cause technically 85 would fulfill the temp >= 50 condition.

let temp = 85;

if (temp >= 80){
    console.log("It is hot.")
} else if (temp >= 65) {
    console.log("It is warm.")
} else if (temp >= 50) {
    console.log("It is cool.")
} else {
    console.log("It is cold")
}