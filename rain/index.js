const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 0.3

class Rain {
  constructor(x) {
    this.x = x
    this.y = -20
    this.width = 5
    this.height = 20
    this.velocity = 5
  }

  show() {
    c.fillStyle = 'skyblue'
    c.fillRect(this.x, this.y, this.width, this.height)
  }

  fall() {
    this.show()
    this.y += this.velocity
    if (this.y >= canvas.height) {
      this.y = -20
      this.velocity = 5
      this.x = Math.random()*1024
    } else this.velocity += gravity
  }
}
let a = 0
const drop = []
  setInterval(() => {
    if (drop.length < 150) {
    drop.push(new Rain(Math.random()*1024))
    }
  }, 5);

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  for (let i = 0; i < drop.length; i++) {
    drop[i].fall()
  }
}

animate()

console.log(new Date().toLocaleDateString().replace(/[-./]/g, '-'))