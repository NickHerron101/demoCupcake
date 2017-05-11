"use strict";

var cardStyle = require("./cards");

function activateEvents(){
	$(".card-wrapper").click(cardStyle.highlightCard);
}

module.exports = activateEvents;