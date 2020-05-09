
async function unresolveOutdated(){
	var spans = document.querySelectorAll('span');
	spans.forEach(function(span){
		if(span.textContent.trim() == 'Show resolved') span.click();
	})

	await sleep(4000);

	var allSpans = [].slice.call(document.getElementsByTagName('span'));
	allSpans.forEach(function(span){
		if(span.title == 'Label: Outdated'){
			var details = span.parentNode.parentNode.parentNode.parentNode
			// Hard coding button
			// TODO: Write a more generic logic without jQuery & DFS
			var button = details.children.item(1).children.item(1).children.item(1).children.item(2);
			if(button.textContent.trim() == 'Unresolve conversation') button.click();
		}
	})
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

unresolveOutdated();
