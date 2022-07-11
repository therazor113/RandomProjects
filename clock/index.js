const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const text = canvas.getContext('2d')
let date = new Date()

canvas.wdith = 1020
canvas.height = 576
text.fillStyle = 'purple'
text.font = 'bold 20px sans-serif'
c.lineWidth = 5

class Arc {
  constructor({x, y, r, time, color}) {
    this.x = x
    this. y = y
    this.r = r
    this.time = time
    this.color = color
  }
  draw() {
    c.strokeStyle = this.color
    c.beginPath()
    c.arc(this.x, this.y, this.r, 0, this.time)
    c.stroke()
  }
}

setInterval(() => {
  c.clearRect(0, 0, canvas.width, canvas.height)
  date = new Date()
  text.fillText(date.toLocaleTimeString(), 60, 100)
  new Arc({
    x:115,
    y: 90,
    r: 75,
    time: date.getSeconds()/(Math.PI*3),
    color: 'blue'
  }).draw()

  new Arc({
    x:115,
    y: 90,
    r: 85,
    time: date.getMinutes()/(Math.PI*3),
    color: 'green'
  }).draw()

  new Arc({
    x:115,
    y: 90,
    r: 95,
    time: date.getHours()/(Math.PI*1.2),
    color: 'red'
  }).draw()
}, 500)