var animationFrame = 0

const roboAnimation = [
  "images/robo-1.png",
  "images/robo-2.png",
  "images/robo-3.png",
  "images/robo-4.png",
  "images/robo-5.png",
  "images/robo-6.png",
]

setInterval(() => {
  document.getElementById("animateRobo").src = roboAnimation[animationFrame]

  animationFrame++
  if(animationFrame > 5) {
    animationFrame = 0
  }
}, 200)