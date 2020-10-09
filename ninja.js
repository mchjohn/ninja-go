var animationFrame = 0

const ninjaAnimation = [
  "images/black-ninja-attack-001.png",
  "images/black-ninja-attack-002.png",
  "images/black-ninja-attack-003.png",
  "images/black-ninja-attack-004.png",
  "images/black-ninja-attack-005.png",
  "images/black-ninja-attack-006.png",
  "images/black-ninja-attack-007.png"
]

setInterval(() => {
  document.getElementById("animateNinja").src = ninjaAnimation[animationFrame]

  animationFrame++
  if(animationFrame > 6) {
    animationFrame = 0
  }
}, 200)