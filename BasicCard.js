
var BasicCard = function (front, back) {
	this.front = front;
	this.back = back;
};

BasicCard.prototype.makeCard = function() {

	  console.log(this.front);
	  console.log(this.back);
};

module.exports = BasicCard;