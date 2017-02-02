"use strict";

document.querySelectorAll(".ab_input").forEach(function (el) {
  // Input object
  // let input = el.querySelector("input")
  // let label = el.querySelector("label")
  // if (label !== null) {
  //   if (label !== el.firstChild)
  //   {
  //     el.appendChild(label);
  //   }
  // } else {
  //   // Create label
  //   let newLabel = document.createElement("label")
  //
  //   newLabel.innerText = input.attributes["placeholder"].value
  //   input.attributes.removeNamedItem("placeholder")
  //   el.appendChild(newLabel)
  // }
  //
  // if (input.attributes["value"] === undefined)
  // {
  //   let attr = document.createAttribute("value")
  //   // attr.value = "value"
  //   input.attributes.setNamedItem(attr)
  // }

  var parent = el.parentNode;
  var container = document.createElement('div');
  container.className = "ab_input_container";
  parent.insertBefore(container, el.nextSibling);
  container.appendChild(el);

  // Create label
  var newLabel = document.createElement("label");

  newLabel.innerText = el.attributes["placeholder"].value;
  el.attributes.removeNamedItem("placeholder");
  container.appendChild(newLabel);

  if (el.attributes["value"] === undefined) {
    var attr = document.createAttribute("value");
    el.attributes.setNamedItem(attr);
  }

  el.onkeyup = function (e) {
    e.target.attributes["value"].value = e.target.value;
  };
});