var allButtons = document.querySelectorAll('button')
allButtons.forEach(function(button) {
    if(button.textContent.trim() == 'Resolve conversation') button.click();
})
