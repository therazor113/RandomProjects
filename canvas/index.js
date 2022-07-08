document.querySelector('.push').addEventListener('click', () => {
  for (let i=1;i<=10;i++) {
    new cube(
    Math.random()*260+15,
    Math.random()*100+15,
    Math.random()*7+1,
    Math.floor(Math.random()*16777215).toString(16)).show()
  }
})
let x = document.createElement('canvas')
x.style.backgroundColor = 'black'
let obj = x.getContext('2d')


document.body.appendChild(x)

class cube {
  constructor(x, y, width, color) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
  }
  show() {
    obj.beginPath()
    obj.lineWidth = this.width
    obj.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    obj.strokeStyle = `#${this.color}`
    obj.stroke()
  }
}