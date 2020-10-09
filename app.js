new Vue({
  el: '#app',
  data: {
    running: true,
    ninjaLife: 100,
    roboLife: 100,
    logs: []
  },
  computed: {
    hasResult() {
      return this.ninjaLife == 0 || this.roboLife == 0
    }
  },
  methods: {
    startGame() {
      this.running = true
      this.ninjaLife = 100
      this.roboLife = 100
      this.logs = []
    },
    attack(special) {
      // range do Ninja
      this.hurt('roboLife', 5, 10, special, 'Ninja', 'Robô', 'ninja')
      if(this.roboLife > 0) {
        // Range do Robô
        this.hurt('ninjaLife', 5, 11, false, 'Robô', 'Ninja', 'robo')
      }
    },
    hurt(prop, min, max, special, source, target, cls) {
      const plus = special  ? 1 : 0
      const hurt = this.getRandom(min + plus, max + plus)
      this[prop] = Math.max(this[prop] - hurt, 0)
      this.registerLog(`${source} atacou o ${target} com ${hurt}.`, cls)
    },
    healAndHurt() {
      this.heal(3, 20)
      this.hurt('ninjaLife', 7, 12, false, 'Robô', 'Ninja', 'robo')
    },
    heal(min, max) {
      const heal = this.getRandom(min, max)
      this.ninjaLife = Math.min(this.ninjaLife + heal, 100)
      this.registerLog(`Ninja recuperou ${heal} de vida.`, 'ninja')
    },
    getRandom(min, max) {
      const value = Math.random() * (max - min) + min
      return Math.round(value)
    },
    registerLog(text, cls) {
      this.logs.unshift({ text, cls })
    }
  },
  watch: {
    hasResult(value) {
      if(value) this.running = false
    }
  }
})
