const display = document.querySelector('.display')
const tree = {value: 1, 
  left: {value: 2, left: {value: 3}, right: {value: 4}}, 
  right: {value: 3, left: {value: 4}, right: {value: 5}}}

display.textContent = JSON.stringify(tree, null, 1)