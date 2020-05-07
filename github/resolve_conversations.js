var resolveButtons = []
var allButtons = document.querySelectorAll('button')
allButtons.forEach(function(button) {
    if(button.textContent.trim() == 'Resolve conversation') resolveButtons.push(button)
})
resolveButtons.forEach(function(button){ button.click()})
