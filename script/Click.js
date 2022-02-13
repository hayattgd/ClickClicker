let point = 0
let counter = document.getElementsByClassName("Counter")
let upgrades = new Array(1)

//Init
upgrades[0] = 1

function onClick() {
  point += upgrades[0]
  counter[0].innerHTML = point.toString()
}

function Upgrade1() {
  upgrades[0] += 1
}