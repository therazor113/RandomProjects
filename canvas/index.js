const canvas = document.querySelector('.canvas')
const obj = canvas.getContext("2d")

const colorFade = obj.createLinearGradient(0, 0, 200, 0)
colorFade.addColorStop(0, "purple")
colorFade.addColorStop(1, "white")

obj.fillStyle = colorFade
obj.font = "30px arial"
obj.fillText('Hello, World!', 10, 100)