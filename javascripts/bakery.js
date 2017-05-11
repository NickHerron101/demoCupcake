"use strict";

let inventory = [];
let bakery = {};

// var fillInventory = (data) => {}

bakery.getInventory = () => {
	return inventory;
};

// let fillInventory = (data) => {
// 	data.cakes.forEach(function(element){
// 		inventory.push(element);
// 	});
// };

bakery.loadInventory = () => {
	return new Promise( function(resolve, reject){
		let inventoryLoader = new XMLHttpRequest();
		inventoryLoader.open("GET", "inventory.json");
		inventoryLoader.send();

		inventoryLoader.addEventListener("load", function() {
			var data = JSON.parse(this.responseText);
			// inventory = data;
			resolve(data);
		});
	});
};

module.exports = bakery; ///only have to look to the bakery object