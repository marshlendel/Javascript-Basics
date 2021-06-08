for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

//With switches (maybe not ideal)
// for (let i = 1; i <= 100; i++) {
//   switch (true) {
//     case i % 15 === 0:
//       console.log("Fizz Buzz");
//       break;
//     case i % 5 === 0:
//       console.log("buzz");
//       break;
//     case i % 3 === 0:
//       console.log("fizz");
//       break;
//     default:
//       console.log(i);
//       break;
//   }
// }
