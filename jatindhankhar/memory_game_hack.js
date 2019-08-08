classes = ['fa-cube', 'fa-diamond', 'fa-leaf', 'fa-bolt', 'fa-bomb', 'fa-anchor', 'fa fa-paper-plane-o', 'fa fa-bicycle']

for(var i = 0 ; i < classes.length ; i++){
	var x = document.getElementsByClassName(classes[i]);
	for(var j=0; j <x.length ; j++){x[j].parentElement.click();}
}
