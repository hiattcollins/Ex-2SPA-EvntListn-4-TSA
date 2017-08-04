// console.log("random.js")

// ********** EVENT LISTENER ACTIVATES ARROW CHANGE FUNCTION ********** //
document.querySelector("body").addEventListener("click", function() {
	console.log("click detected on body element");
	changeArrow(randomizer());
});


// ********** FUNCTION TO GENERATE RANDOM NUMBER ********** //
function randomizer() {
	let randomNum = Math.random();
	// console.log("randomNum", randomNum); 
	return randomNum;
};


// ********** FUNCTION ACCEPTS RANDOM NUMBER AND CHANGES ARROW DIRECTION BASED ON NUMBER ********** //
function changeArrow(randomNum) {
	console.log("changeArrow received random num:", randomNum);

	if (randomNum > 0.5) {
		console.log("left arrow");
		document.getElementById("arrowDiv").classList.add("leftArrow");
		document.getElementById("arrowDiv").classList.remove("rightArrow");
	} else {
		console.log("right arrow");
		document.getElementById("arrowDiv").classList.add("rightArrow");
		document.getElementById("arrowDiv").classList.remove("leftArrow");
	}

};

changeArrow(randomizer());