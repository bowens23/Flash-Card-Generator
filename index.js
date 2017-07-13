
var basicCard = require("./basicCard");
var clozeCard = require("./clozeCard");
var fs = require("fs");
let Promises = require('bluebird');
let Inquirer = require('inquirer');

// variable we will use to count how many times our questions have been asked
var count = 0;
// array in which we will store each of our new programmer objects
var basicCardsArray = [];

const questions1 = [
	{
		type: "list",
		message: 'What kind of card would you like to make?',
		choices: [ "clozeCard", new Inquirer.Separator(), "basicCard" ],
		name : "cardType"
	},
];

const questions2 = [
	{
		type: "input",
		message : "What should be on the front of the card?",
		name : "front"
	},
	{
		type: "input",
		message: "What should be on the back of the card?",
		name: "back"
	}
];

const questions3 = [
	{
		type: "input",
		message : "What's the first half of the sentence (a noun that should contain the answer)?",
		name : "cloze"
	},
	{
		type: "input",
		message: "What should be on the back of the card?",
		name: "partial"
	}
];

var askQuestion = function(){

	if (count<10){

		Inquirer.prompt(questions1).then(function(data){

		var fork1 = (data.cardType);

			if (fork1==='basicCard'){
				console.log ("hello")
				Inquirer.prompt(questions2).then(function(data){

				var card1 = new basicCard ({

				front : data.front,
				back : data.back
					
				})

				card1 = JSON.stringify(card1);
				//fs.appendFile('log.txt', card1);
				basicCardsArray.push(card1);
				console.log (basicCardsArray);
				$(basicCardsArray[1]).appendTo("#cardHere");
				count++;

				askQuestion();
				

				})

			}

			if (fork1==='clozeCard'){
				Inquirer.prompt(questions3).then(function(data){

				const card2 = new clozeCard({

				cloze: data.cloze,
				partial: data.partial

				})

				card1 = JSON.stringify(card2);
				fs.appendFile('log.txt', card2);

				})

			}

		});

	}

	// if (count=10){basicCardsArray.empty();}

}

// $("#start").on("click", function(event){
// basicCardsArray[1].appendTo("#cardHere")
// })

			

//below we have to run the function to get everything going
askQuestion();










// var type = process.argv[2];
// if (type==='basic'){
// var front = process.argv[]
// var back = 
// }
// if (type==='cloze'){
// var cloze = 
// var partial =
// };

//front
//back
//cloze
//partial
//fullText

// fs.readFile('log.txt', "utf8", function(err, data){
//          if(err){
//             console.log(err)
//          }              
//          console.log(data);
//       })