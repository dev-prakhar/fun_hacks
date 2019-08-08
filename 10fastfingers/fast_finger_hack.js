var highlightedText = document.getElementsByClassName("highlight");
while (highlightedText.length > 0){
	var inputField = document.getElementById('inputfield');
	inputField.value = highlightedText[0].innerText;
	pressSpaceOn(inputField);
	highlightedText = document.getElementsByClassName("highlight");
}

function pressSpaceOn(element) {
	var event = new CustomEvent('keyup');
	event.which = 32; // Space Bar
	event.keyCode = 32;
	element.dispatchEvent(event);
}
