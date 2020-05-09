var allSpans = [].slice.call(document.getElementsByTagName('span'));
allSpans.forEach(function(span){
	if(span.title == 'Label: Outdated'){
		var div = span.parentNode.parentNode;
		// Hard coding button
		// TODO: Write a more generic logic without jQuery & DFS
		var button = div.children.item(2).children.item(1).children.item(2);
		if(button.textContent.trim() == 'Resolve conversation') button.click();
	}
})

