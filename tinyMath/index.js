const input = document.querySelector('.input')
const doubleButton = document.querySelector('.doubleButton')
const tripleButton = document.querySelector('.tripleButton')
const output = document.querySelector('.output')

doubleButton.addEventListener('click', () => {
  output.textContent = doubler(input.value)
})

tripleButton.addEventListener('click', () => {
  output.textContent = tripler(input.value)
})

function multiplier(factor) {
  return x => x * factor
}

const doubler = multiplier(2)
const tripler = multiplier(3)