
$(document).ready(function() {

	reset();

	
});

function reset() {
	var size = prompt("How many squares in one row?");
	$("#maingrid div").remove();
	for (var i = 1; i <= Math.pow(size, 2); i++) {
		$("#maingrid").append("<div></div>");
	};
	$("#maingrid div").height(700/size);
	$("#maingrid div").width(700/size);
};



$(document.body).on('mouseenter', '#maingrid div' ,function(){
	$(this).css("background-color", "#66ccff");
});

