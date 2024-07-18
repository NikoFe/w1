let leftLanguages = document.getElementsByClassName("left-language");
let rightLanguages = document.getElementsByClassName("right-language");
let leftTextArea = document.getElementById("left-text-area");

let volumeLoud = document.getElementById("left-speaker");
let xMark = document.getElementById("left-x");
let dictionaryLink = document.getElementById("dictionaryLink");
let rightStar = document.getElementById("right-star");
let rightSpeaker = document.getElementById("right-speaker");

//let charactersTyped = 0;

//let leftSelected = leftLanguages[1];
//let rightSelected = rightLanguages[0];
let leftSelected = 1;
let rightSelected = 0;

//console.log(leftLanguages.length);

if (!(leftLanguages[0] instanceof HTMLElement)) {
  console.log("OOPS!");
}

refresh();

for (let i = 0; i < leftLanguages.length; i++) {
  leftLanguages[i].addEventListener("click", function () {
    console.log("i: ", i);
    leftSelected = i;

    console.log("left:" + leftLanguages[leftSelected].textContent);
    console.log("right: " + rightLanguages[rightSelected].textContent);

    if (
      leftLanguages[leftSelected].textContent ==
      rightLanguages[rightSelected].textContent
    ) {
      rightSelected = (rightSelected + 1) % rightLanguages.length;
    }

    refresh();
  });
}

for (let i = 0; i < rightLanguages.length; i++) {
  rightLanguages[i].addEventListener("click", function () {
    console.log("i: ", i);
    rightSelected = i;

    console.log("left:" + leftLanguages[leftSelected].textContent);
    console.log("right: " + rightLanguages[rightSelected].textContent);

    if (
      leftLanguages[leftSelected].textContent ==
      rightLanguages[rightSelected].textContent
    ) {
      leftSelected = (leftSelected + 1) % leftLanguages.length;
    }

    refresh();
  });
}

function refresh() {
  for (let i = 0; i < leftLanguages.length; i++) {
    if (i != leftSelected) {
      leftLanguages[i].style.color = "gray";
      leftLanguages[i].style.borderBottom = "none";
      leftLanguages[i].id = "none";
    } else {
      leftLanguages[i].style.color = "blue";
      leftLanguages[i].style.borderBottom = "2px solid blue";
      leftLanguages[i].id = "selected";
    }
  }
  for (let i = 0; i < rightLanguages.length; i++) {
    // console.log(leftLanguages[i].textContent);

    if (i != rightSelected) {
      rightLanguages[i].style.color = "gray";
      rightLanguages[i].style.borderBottom = "none";
      rightLanguages[i].id = "none";
    } else {
      rightLanguages[i].style.color = "blue";
      rightLanguages[i].style.borderBottom = "2px solid blue";
      rightLanguages[i].id = "selected";
    }
  }
}

function leftTextAreaChange() {
  let textLength = leftTextArea.textLength;

  // console.log("LENGTH: " + leftTextArea.value + " a");

  document.getElementById("right-text-area").value = leftTextArea.value;
  document.getElementById("filled").innerHTML = textLength + " / 5.000";

  console.log(xMark.innerText);

  console.log(leftTextArea.value.length);

  if (leftTextArea.value.length != 0) {
    rightSpeaker.style.display = "inline";
    volumeLoud.style.display = "inline";
    xMark.style.display = "inline";
    dictionaryLink.style.display = "inline";
    rightStar.style.display = "inline";
  } else {
    rightSpeaker.style.display = "none";
    volumeLoud.style.backgroundColor = "yellow";
    volumeLoud.style.display = "none";
    xMark.style.display = "none";
    dictionaryLink.style.display = "none";
    rightStar.style.display = "none";
  }
}
