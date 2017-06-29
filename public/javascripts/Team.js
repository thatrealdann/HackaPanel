class Team {
    constructor (leaderboard, id, name, score) {
        this.leaderboard = leaderboard
        this.id = id
        this.name = name
        this.score = score
        this.element = this.defineElement()
        this.scoreElement = this.element.querySelector(".score")
        this.progressElement = this.element.querySelector(".progress")
    }
    defineElement () {
        const li = document.createElement("li")
        li.innerHTML = `<span class="name">${this.name}</span>
                        <span class="score">${this.score}</span>
                        <div class="progress"></div>`
        return li;
    }
    setScore (score) {
        this.score = score
        this.scoreElement.innerHTML = score
    }
    setProgress (percent) {
        this.progressElement.style.width = percent + "%"
    }
}

module.exports = Team