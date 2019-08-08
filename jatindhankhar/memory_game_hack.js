classes = ['fa-cube', 'fa-diamond', 'fa-leaf', 'fa-bolt', 'fa-bomb', 'fa-anchor', 'fa fa-paper-plane-o', 'fa fa-bicycle']

for(let targetClass of classes){
	
	targetElements = [...document.getElementsByClassName(targetClass)]
	targetElements.map(el => el.parentElement.click());
}
