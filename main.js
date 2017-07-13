var flashBasic = require("./BasicCard");
var flashCloze = require("./ClozeCard");


var firstPresident = new flashBasic (
    "Who was the first president of the United States?", "George Washington");

var firstPresidentCloze = new flashCloze (
    "George Washington was the first president of the United States.", "George Washington");

var trumpCloze = new flashCloze (
    "Donald Trump is the oldest man to be inaugurated president of the United States.", "George Washington");


firstPresident.makeCard();
firstPresidentCloze.makeCard();
trumpCloze.makeCard();
