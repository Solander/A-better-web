let good = document.getElementById('good')
let fast = document.getElementById('fast')
let cheap = document.getElementById('cheap')

let updateBoxes = e => {
  let target = e.target

  if (target == good) {
    if (cheap.checked && fast.checked)
      fast.checked = false
  }
  else if (target == cheap) {
    if (good.checked && fast.checked)
      good.checked = false
  }
  else if (target == fast) {
    if (good.checked && cheap.checked)
      cheap.checked = false
  }
}

good.onclick = updateBoxes
fast.onclick = updateBoxes
cheap.onclick = updateBoxes
