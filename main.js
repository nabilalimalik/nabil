function imgChange(){
	var val = document.getElementById("nabil").src;
	var numPic = parseInt(val.match(/(\d+)/)) + 1;
	if (numPic == 6) {
		document.getElementById("nabil").src = "nabil1.png";
	} else {
		document.getElementById("nabil").src = "nabil" + numPic + ".png";
	}
}