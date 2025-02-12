player.onChat("atrás", function (num1) {
    agent.move(BACK, num1)
})
player.onChat("teletransportar", function () {
    agent.teleport(pos(5, 0, 0), WEST)
})
player.onChat("arriba", function (num1) {
    agent.move(UP, num1)
})
player.onChat("abajo", function (num1) {
    agent.move(DOWN, num1)
})
player.onChat("adelante", function (num1) {
    agent.move(FORWARD, num1)
})
player.onChat("regresa", function () {
    agent.teleportToPlayer()
})
player.onChat("derecha", function (num1) {
    agent.move(RIGHT, num1)
})
player.onChat("izquierda", function (num1) {
    agent.move(LEFT, num1)
})
agent.teleportToPlayer()
agent.setItem(JUNGLE_SAPLING, 50, 1)
agent.setAssist(PLACE_ON_MOVE, true)
