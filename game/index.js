const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.2

class Sprite {
  constructor({ position, velocity, color }) {
    this.position = position
    this.velocity = velocity
    this.height = 150
    this.color = color
  }

  draw() {
    c.fillStyle = this.color
    c.fillRect(this.position.x, this.position.y, 50, this.height)
  }

  update() {
    this.draw()
    
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0
    } else this.velocity.y += gravity
  }
}

const player = new Sprite({
  position: {
    x: 0,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'white'
})

const enemy = new Sprite({
  position: {
    x: 974,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'red'
})

console.log(player)

const playerKeys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  },
}

const enemyKeys = {
  ArrowUp: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  },
  ArrowDown: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
}

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()

  player.velocity.x = 0
  if (playerKeys.w.pressed) {
    player.velocity.y = -5
  }
  if (playerKeys.a.pressed) {
    player.velocity.x = -1
  } 
  if (playerKeys.d.pressed) {
    player.velocity.x = 1
  }

  enemy.velocity.x = 0
  if (enemyKeys.ArrowUp.pressed) {
    enemy.velocity.y = -5
  }
  if (enemyKeys.ArrowLeft.pressed) {
    enemy.velocity.x = -1
  } 
  if (enemyKeys.ArrowRight.pressed) {
    enemy.velocity.x = 1
  }
}

animate()

window.addEventListener('keydown', (event) => {
  if (playerKeys[event.key]) {
  playerKeys[event.key].pressed = true
  }
  if (enemyKeys[event.key]) {
    enemyKeys[event.key].pressed = true
  }
})

window.addEventListener('keyup', (event) => {
  if (playerKeys[event.key]) {
    playerKeys[event.key].pressed = false
  }
  if (enemyKeys[event.key]) {
    enemyKeys[event.key].pressed = false
  }
})