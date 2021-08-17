var readlineSync = require('readline-sync');
var chalk = require('chalk')
console.log("Hey Stranger. Let's Play" + chalk.red.bold("The Average GK Quiz") + ". It has a total of 10 questions.")
var userName = readlineSync.question("Please state your name: ");
console.log("Hello " + chalk.yellow.bold(userName) + "! Let the Game Begin.")
var score = 0;
var highScores = ["Chaitanya: 10", "Dushyant: 9"];

function play(ques, ans){
	userAns = readlineSync.question(ques);
	if(userAns.toUpperCase() === ans.toUpperCase()){
		score = score+1;
		console.log("You were " + chalk.green.bold("right") + " and you gained 1 point.");
		console.log("Your current score is:", score);
		console.log("-------------------------------------------");
	} else{
		score = score-1;
		console.log("You were "+ chalk.red.bold("wrong") + " and you lost 1 point.");
		console.log("Your current score is:", score);
		console.log("-------------------------------------------");
	}
}

var questions = [{
	quest: "Who created Bitcoin? ",
	answ: "Satoshi Nakamoto",
}, {
	quest: "What is the name of distributed ledger on a peer to peer network? ",
	answ: "Blockchain",
}, {
	quest: "Which is the 2nd largest crypto currency by market cap? ",
	answ: "Ethereum",
}, {
	quest: "What is the person doing calculations to verify a transaction called as? ",
	answ: "Miner",
}, {
	quest: "What does NFT stands for? ",
	answ: "Non Fungible Token",
}, {
	quest: "What is the name of the cryptocurrency with the largest degree of decentralization? ",
	answ: "Bitcoin",
}, {
	quest: "What is the full form of DeFi? ",
	answ: "Decentralized Finance",
}, {
	quest: "What powers the Ethereum Virtual Machine? ",
	answ: "Gas",
}, {
	quest: "What is the name of the research paper that brought Bitcoin to the world? ",
	answ: "White Paper",
}, {
	quest: "When did bitcoin’s creator publish a whitepaper introducing the digital currency? ",
	answ: "2008",
}]

for (i=0; i<questions.length; i++){
	play(questions[i].quest,questions[i].answ);
}

console.log("Thank you so much for playing.");
console.log("Your Final Score is:", chalk.green.bold(score));
console.log("-------------------------------------------");
console.log("Below are the high scores. DM me if you think your name should be there!");
for (j=0; j<highScores.length; j++){
	console.log("At " + (j+1) + " Position we have:");
	console.log(chalk.green.bgYellow.bold(highScores[j]));
}