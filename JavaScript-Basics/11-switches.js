//Switches are another type of condition that work when you have a few choices and need to execute code based on on something matching those choices

//for this example, an else if would work just as well and comes down to personal preference.
let ingredients = "Salmon";

switch (ingredients) {
    case "Ground Beef":
        console.log("I'll make hamburgers.")
        break;
    case "Salmon":
        console.log("I'll make grilled salmon.")
        break;
    case "Chicken":
        console.log("I'll make chicken tacos.")
        break;
    default:
        console.log("I guess I should order something");
}

//There are some cases where a switch works better though
//such as if there is a test with multiple answers that have the same result by adding multiple cases.

let answer = "B";

switch (answer) {
    case "A":
    case "B":
        console.log("Gryffindor")
        break;
    case "C":
    case "D":
        console.log("Hufflepuff")
        break;
    case "E":
    case "F":
        console.log("Ravenclaw")
        break;
    case "G":
    case "H":
        console.log("slytherin")
        break;
    default:
        console.log("Must be a muggle then.")
} 

//If you were to do this with if else, you would have to use
// the OR || operator and it would look pretty messy