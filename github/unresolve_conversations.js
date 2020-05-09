async function unresolve(){
	var allSpans = document.querySelectorAll('span');
	allSpans.forEach(function(span){
		if(span.textContent.trim() == 'Show resolved') span.click();
	})

	await sleep(3000);

	var allButtons = document.querySelectorAll('button');
	allButtons.forEach(function(button) {
	    if(button.textContent.trim() == 'Unresolve conversation') button.click();
	})
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

unresolve();
