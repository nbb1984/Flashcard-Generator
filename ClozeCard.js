var ClozeCard = function (text, cloze){
	
	this.cloze = cloze;
	this.fullText = text;
	this.partial = this.fullText.replace(this.cloze, "...");
};
	
ClozeCard.prototype.makeCard = function() {
	if (this.partial === this.fullText) {
		console.log("error: " + '"' + this.cloze + '"' + " doesn't appear in " + '"' + this.fullText + '"');
	} else {
		  console.log(this.partial);
		  console.log(this.cloze);
	}
};

module.exports = ClozeCard;
