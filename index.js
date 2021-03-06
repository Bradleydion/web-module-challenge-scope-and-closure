// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter 1 has a callback function. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter 1 has a closure, and you can tell because the callback function is returning a count outside of the function. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 *Counter 1 is prefereable for when you want to have a function on stand by and reused over and over again, or have a function primed when results are given. Counter 2 would be used best if a function only needs to be used once.  
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(/*Code Here*/){
  let points = Math.round(Math.random())
  return points
}
// console.log(inning())
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/ 
function finalScore(callBack,numberOfInning){
  let homeScore= 0
  let awayScore= 0
  for(let i =1; i<=numberOfInning; i++){
  homeScore+=callBack()
  awayScore+=callBack()
  if (i=== 1){
      console.log ('1st inning', awayScore, "-", homeScore)
     }
     else if(i === 2){
      console.log ('2nd inning', awayScore, "-", homeScore)
     }
     else if(i === 3){
      console.log ('3rd inning', awayScore, "-", homeScore)
     }
     else{
      console.log (i,'th inning', awayScore, "-", homeScore)
     }
    }
  
return {"Home":homeScore, "Away":awayScore}
}
// console.log(finalScore(inning,9))


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(finalScore,inning , inningNumber) {
  result =finalScore(inning, inningNumber)
return `Final Score: ${result.Away} - ${result.Home}`
}
console.log(scoreboard(finalScore,inning,9))
