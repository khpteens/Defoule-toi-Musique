// Finish.js

var hitGoal = null;

var Vent = Vent || {};

//loading the game assets
Vent.Pick = function() {};

Vent.Pick.prototype = {
	create: function() {

		createBG(0x938884);
		createCopyright();			

		// "How many baseballs do you need to hit?"
		text = "Quel instrument\nveux-tu jouer ?";
		var t2 = this.game.add.text(this.game.width / 2, this.game.height / 2 - 70, text, h2_style);
		t2.anchor.set(0.5);

		// bt "Just a few"
		text = "Gratter une guitare";
		var aFewBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 50, "square");
		createBt(aFewBt, text, "Guitar", false, "emoji1");				

		// bt "A lot"
		text = "Jouer une batterie";
		var aLotBt = this.game.add.sprite(this.game.width / 2, this.game.height / 2 + 110, "square");
		createBt(aLotBt, text, "Drum", false, "emoji2");		

	},
	update: function() {

	}
};