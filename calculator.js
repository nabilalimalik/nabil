var val = 0;
var op = "";

function calculate(clicked_id){
	var buttonID = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];
	for (var i = 0; i < buttonID.length; i++) {
		if(clicked_id == buttonID[i]){
			document.getElementById("input").value += clicked_id;
			break;
		} else if (clicked_id == "add") {
			val = parseFloat(document.getElementById("input").value);
			document.getElementById("input").value = "";
			op = "add";
			break;
		} else if (clicked_id == "subtract") {
			val = parseFloat(document.getElementById("input").value);
			document.getElementById("input").value = "";
			op = "subtract";
			break;
		} else if (clicked_id == "divide") {
			val = parseFloat(document.getElementById("input").value);
			document.getElementById("input").value = "";
			op = "divide";
			break;
		} else if (clicked_id == "multiply") {
			val = parseFloat(document.getElementById("input").value);
			document.getElementById("input").value = "";
			op = "multiply";
			break;
		} else if (clicked_id == "equal") {
			var temp = parseFloat(document.getElementById("input").value);
			if (op == "add") {
				document.getElementById("input").value = "";
				val += +temp;
				document.getElementById("input").value = String(val);
			} else if (op == "subtract") {
				document.getElementById("input").value = "";
				val -= +temp;
				document.getElementById("input").value = String(val);
			} else if (op == "divide") {
				document.getElementById("input").value = "";
				val = val / +temp;
				document.getElementById("input").value = String(val);
			} else if (op == "multiply") {
				document.getElementById("input").value = "";
				val = val * +temp;
				document.getElementById("input").value = String(val);
			}
			break;
		} else if (clicked_id == "c") {
			document.getElementById("input").value = "";
			break;
		}
	}	
}