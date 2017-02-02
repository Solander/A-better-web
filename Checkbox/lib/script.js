'use strict';

var good = document.getElementById('good');
var fast = document.getElementById('fast');
var cheap = document.getElementById('cheap');

var updateBoxes = function updateBoxes(e) {
  var target = e.target;

  if (target == good) {
    if (cheap.checked && fast.checked) fast.checked = false;
  } else if (target == cheap) {
    if (good.checked && fast.checked) good.checked = false;
  } else if (target == fast) {
    if (good.checked && cheap.checked) cheap.checked = false;
  }
};

good.onclick = updateBoxes;
fast.onclick = updateBoxes;
cheap.onclick = updateBoxes;