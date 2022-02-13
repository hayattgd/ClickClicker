let point = 0
let counter = document.getElementsByClassName("Counter")

function onClick() {
  point += 1
  counter[0].innerHTML = point.toString()
}