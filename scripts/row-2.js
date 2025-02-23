let row35 = document.getElementsByClassName("row-35");
const row3 = document.getElementsByClassName("row-3");
const row4 = document.getElementsByClassName("row-4");
let row35Extra = document.getElementById("row-35-extra");
let langl = document.getElementById("langl");
let langr = document.getElementById("langr");
let relative3 = document.getElementsByClassName("relative-3");

let buttons = document.getElementsByClassName("button-1");

buttonFocus(0);

function buttonFocus(number) {
  for (i = 0; i < buttons.length; i++) {
    if (i == number) {
      buttons[i].style.backgroundColor = "#cfe2fa";
    } else {
      buttons[i].style.backgroundColor = "white";
    }
  }
}

function createDiv(newDiv, rightDiv) {
  console.log("CREATE DIV");

  relative3[0].style.display = "none";
  relative3[1].style.display = "none";
  //row35[0].style.display = "none";

  let element = document.getElementById("newDiv");
  element.remove();

  newDiv.style.display = "flex";
  newDiv.id = "newDiv";
  newDiv.style.justifyContent = "start";
  newDiv.style.border = "solid 1px gray";
  newDiv.style.gap = "320px";
  newDiv.style.width = "1290px";
  newDiv.style.padding = "30px 0px";
  newDiv.style.margin = "auto";
  newDiv.style.border = "solid 1px lightGray";
  newDiv.style.borderRadius = "1%";

  let cloudImage = document.createElement("img");
  cloudImage.src = "images/cloud.png";
  cloudImage.style.width = "fit-content";
  cloudImage.style.height = "235px";
  cloudImage.style.marginLeft = "190px";

  let par = document.createElement("p");
  par.innerText = "Ali izberite datoteko";

  let blueButton = document.createElement("button");
  blueButton.style.backgroundColor = "blue";
  blueButton.style.color = "white";
  blueButton.style.height = "35px";
  blueButton.style.width = "300px";
  blueButton.style.border = "none";
  blueButton.innerText = "Prebrskaj datoteke";

  rightDiv.style.display = "flex";
  rightDiv.style.flexDirection = "column";
  rightDiv.style.alignItems = "center";

  rightDiv.appendChild(par);
  rightDiv.appendChild(blueButton);

  newDiv.appendChild(cloudImage);
  newDiv.appendChild(rightDiv);

  row3[0].parentNode.insertBefore(newDiv, row4[0]);
}

function createForm(newDiv) {
  relative3[0].style.display = "none";
  relative3[1].style.display = "none";
  //row35Extra.style.display = "none";
  console.log("CREATE FORM!");
  row35[0].style.display = "none";
  let element = document.getElementById("newDiv");
  element.remove();

  newDiv.style.display = "flex";
  newDiv.style.alignItems = "center";
  newDiv.id = "newDiv";
  newDiv.style.justifyContent = "center";
  newDiv.style.border = "solid 1px gray";
  newDiv.style.gap = "25px";
  newDiv.style.width = "1290px";
  newDiv.style.padding = "50px 0px 80px 0px";
  newDiv.style.margin = "auto";
  newDiv.style.border = "solid 1px lightGray";
  newDiv.style.borderRadius = "1%";

  let input = document.createElement("input");
  input.type = "text";
  input.style.width = "600px";
  input.style.height = "35px";
  input.style.border = "solid 2px blue";
  input.style.borderRadius = "3%";

  let arrowButton = document.createElement("div");
  arrowButton.style.backgroundColor = "blue";
  arrowButton.style.width = "45px";
  arrowButton.style.height = "45px";
  arrowButton.style.borderRadius = "100%";
  arrowButton.style.display = "flex";
  arrowButton.style.alignItems = "center";
  arrowButton.style.justifyContent = "center";

  let arrowRight = document.createElement("i");
  arrowRight.className = "fa-solid fa-arrow-right";
  arrowRight.style.color = "white";
  arrowRight.style.fontSize = "20px";

  arrowButton.appendChild(arrowRight);

  let moveText = document.createElement("p");
  moveText.innerText = "Spletno mesto";
  moveText.style.color = "black";
  moveText.style.position = "absolute";
  moveText.style.zIndex = "50";
  console.log("INNER TEXT:" + moveText.innerText);

  input.appendChild(moveText);

  newDiv.appendChild(input);
  newDiv.appendChild(arrowButton);

  row3[0].parentNode.insertBefore(newDiv, row4[0]);
}

function createLink(tempDiv, text) {
  tempDiv.style.dispay = "flexbox";
  tempDiv.style.flexDirection = "row";
  tempDiv.style.marginTop = "30px";
  tempDiv.style.fontSize = "12px";

  let underText = document.createElement("p");
  underText.innerText = text;
  underText.style.display = "inline";
  underText.style.color = "gray";

  let underText2 = document.createElement("a");
  underText2.href = "https://www.youtube.com/watch?v=cVKROMrLAE8";
  underText2.innerText = "Več o tem";
  underText2.style.display = "inline";
  underText2.style.marginLeft = "10px";
  underText2.style.textDecoration = "none";

  tempDiv.appendChild(underText);
  tempDiv.appendChild(underText2);
}

function textButtonClick() {
  row35Extra.style.display = "flex";
  buttonFocus(0);

  let element = document.getElementById("newDiv");
  element.remove();
  row35[0].style.display = "flex";
  let newDiv = document.createElement("div");
  newDiv.id = "newDiv";
  newDiv.style.display = "none";
  document.body.appendChild(newDiv);

  // row3[0].parentNode.insertBefore(newDiv, row4[0]);
}

function imagesButtonClick() {
  row35Extra.style.display = "none";
  console.log("IMAGES");
  buttonFocus(1);
  let newDiv = document.createElement("div");
  let rightDiv = document.createElement("div");

  createDiv(newDiv, rightDiv);

  let whiteButton = document.createElement("button");

  whiteButton.style.color = "blue";
  whiteButton.style.border = "none";
  whiteButton.style.height = "35px";
  whiteButton.style.width = "300px";

  whiteButton.style.marginTop = "10px";

  //<i class="fa-regular fa-clipboard"></i>
  let clipBoard = document.createElement("i");
  clipBoard.className = "fa-regular fa-clipboard";
  clipBoard.style.marginRight = "10px";

  let tempP = document.createElement("p");
  tempP.innerText = "Prilozite iz odlozisca";
  tempP.style.display = "inline";

  whiteButton.appendChild(clipBoard);
  whiteButton.appendChild(tempP);

  let tempDiv = document.createElement("div");
  let text = "Podprte vrste datotek: .jpg, .jpeg in .png.";

  createLink(tempDiv, text);

  rightDiv.appendChild(whiteButton);
  rightDiv.appendChild(tempDiv);
}

function documentsButtonClick() {
  row35Extra.dispay = "none";
  buttonFocus(2);
  let newDiv = document.createElement("div");
  let rightDiv = document.createElement("div");

  createDiv(newDiv, rightDiv);

  let tempDiv = document.createElement("div");
  let text = "Podprte vrste datotek: .jpg, .jpeg in .png.";

  createLink(tempDiv, text);
  rightDiv.appendChild(tempDiv);
}

function websitesButtonClick() {
  buttonFocus(3);

  let newDiv = document.createElement("div");
  createForm(newDiv);
}
