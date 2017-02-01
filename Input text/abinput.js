document.querySelectorAll(".ab_input").forEach(el => {
  // Input object
  let input = el.querySelector("input")
  let label = el.querySelector("label")
  if (label !== null) {
    if (label !== el.firstChild)
    {
      el.appendChild(label);
    }
  } else {
    // Create label
    let newLabel = document.createElement("label")

    newLabel.innerText = input.attributes["placeholder"].value
    input.attributes.removeNamedItem("placeholder")
    el.appendChild(newLabel)
  }

  if (input.attributes["value"] === undefined)
  {
    let attr = document.createAttribute("value")
    // attr.value = "value"
    input.attributes.setNamedItem(attr)
  }

  input.onkeyup = e => {
    e.target.attributes["value"].value = e.target.value;
  }
})
