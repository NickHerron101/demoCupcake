"use strict";
console.log("hello cupcakes");

//need to know where to find it

let Handlebars = require('hbsfy/runtime'),
	cakeInventory = require('./bakery.js'),
	cakeTemplate = require('../templates/cake-grid.hbs'), //follows the path.
	eventStuff = require("./events.js"),
	welcomeTemplate = require("../templates/welcome.hbs"),
	welcomeData = require("../templates/welcome-data.js");

Handlebars.registerHelper("increment", (value) => parseInt(value) + 1);

$("#welcome").append(welcomeTemplate(welcomeData));

function populatePage(stuff){
	//make a div to hold rendered html
	let newDiv = document.createElement("div");
	console.log("popPage",newDiv, stuff);
	newDiv.innerHTML = cakeTemplate(stuff);
	$("#cake-cards").append(newDiv);
	eventStuff();
}



cakeInventory.loadInventory() //this function holsds onto a promise that has the data,
.then(
	(inventoryFromLoadInventoryResolve) => {
		console.log("cake promise", inventoryFromLoadInventoryResolve);
		populatePage(inventoryFromLoadInventoryResolve);
	},
	(reason) => {
		console.log("something went really wrong, sorry to break your heart.");
	});