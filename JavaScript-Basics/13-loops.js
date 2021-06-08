//Loops allow us to execute a block of code until a condition is met
//Great way to iterate through things or do the same thing multiple times

//For loop
//All about that loop control variable (LCV)

/*for (initialExperession; conditionExpression; incrementExpression){
    For loop body (code to be executed)
}
*/

//InitialExpression sets initial value of LCV
//ConditionExpression is evaluted. As long as it's true stay in loop, if not exit
//incrementExpression updates the LCV

//Print numbers 1- 100
// for (let i = 1; i <= 100; i++s){
//     console.log(i);
// }

//Goes from 0 to 50 by 5s
// for (let i = 0; i <= 50; i += 5){
//     console.log(i);
// }

//going from 20 to 1 by -1s
// for (let i = 20; i >= 1; i--){
//     console.log(i);
// }

//Starting at 3, add increments by 5, but doesn't go over 30
for (let i = 3; i <= 30; i += 5){
    console.log(i);
}