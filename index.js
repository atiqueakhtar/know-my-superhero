var readlineSync = require("readline-sync");
var username = readlineSync.question("What is your name? ");
console.log(`Welcome ${username}`);
var count = 0;
var questionList = [
  {
    "question":"Where do I live? ",
    "answer":"bokaro"
  },
  {
    "question":"Who is my favourite wrestler? ",
    "answer":"john cena"
  },
  {
    "question":"Is he still in WWE? ",
    "answer":"yes"
  },
  {
    "question":"How many time did he win the championship? ",
    "answer":"14"
  }
]
function correctAns(){
  count++;
  console.log(`Correct Answer!`);
  console.log(`Your current score is ${count}`);
  console.log(`------------------------------`);
}
function wrongAns(){
  console.log(`Wrong Answer!`);
  console.log(`Your current score is ${count}`);
  console.log(`------------------------------`);
}
function ansCheck(givenAns, expectedAns){
  if(givenAns === expectedAns){
    correctAns();
  }
  else{
    wrongAns();
  }
}
let n = questionList.length;
for(let i=0; i<n; i++){
  var answer = readlineSync.question(questionList[i].question);
  ansCheck(answer, questionList[i].answer);
}
console.log(`Your final score is ${count}`);