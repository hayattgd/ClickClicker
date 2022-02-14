let point = 0
let counter = document.getElementsByClassName("Counter")

//Upgrade Defines
let upgrade_count = 1
let upgrades = new Array(upgrade_count)
let upgrade_cost = new Array(upgrade_count)

//Init
upgrades[0] = 1

function onClick() {
  point += upgrades[0]
  counter[0].innerHTML = point.toString()
}

function Upgrade(id) {
  if(upgrade_cost[id] <= point) {
    upgrades[id] += 1
  }
}