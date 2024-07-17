let historySidebar = document.getElementById("history-sidebar");
let favoritesSidebar = document.getElementsByClassName("favorites-sidebar");
let repeatCircle = document.getElementsByClassName("repeat-circle");
let starCircle = document.getElementsByClassName("saved-circle");
let underCircles = document.getElementsByClassName("under-circle");
let relative3 = document.getElementsByClassName("relative-3");
let row35extra = document.getElementById("row-35-extra");

let startingDiv = document.getElementById("starting-div");

let backupStyle = startingDiv.style;

let chosen = "";

function changeRow() {
  startingDiv.style.width = "78%";
  startingDiv.style.paddingLeft = "20px";

  relative3[0].style.width = "44%";
  relative3[1].style.width = "44%";

  row35extra.style.width = "69%";
  row35extra.style.paddingLeft = "20px";
}

function history(event) {
  console.log("HISTORY");

  if (chosen == "favorites") {
    hideFavorites(event);
  }
  chosen = "history";

  console.log("HISTORY!" + startingDiv);
  historySidebar.style.display = "block";

  changeRow();

  repeatCircle[0].style.backgroundColor = "lightBlue";
  repeatCircle[0].style.color = "blue";
  underCircles[0].style.color = "blue";
}

function favorites(event) {
  console.log("FAVORITES");
  if (chosen == "history") {
    hideHistory(event);
  }

  chosen = "favorites";
  console.log("FAVORITES!");
  favoritesSidebar[0].style.display = "block";

  changeRow();

  starCircle[0].style.backgroundColor = "lightBlue";
  starCircle[0].style.color = "blue";
  underCircles[1].style.color = "blue";

  // for (let i = 0; i < startingDiv.childNodes.length; i++) {
  // startingDiv.childNodes[i].style.backgroundColor = "yellow";
  // }
}

function hideFavoritesSidebar(event) {
  if (
    !favoritesSidebar[0].contains(event.target) &&
    !starCircle[0].contains(event.target)
  ) {
    hideFavorites();
  }
}

function hideHistorySidebar(event) {
  if (
    !historySidebar.contains(event.target) &&
    !repeatCircle[0].contains(event.target)
  ) {
    hideHistory();
  }
}

function hideHistory() {
  chosen = "history";
  historySidebar.style.display = "none";
  //startingDiv.style.paddingLeft = " 125px";
  // startingDiv.style.width = "100%";
  startingDiv.style = backupStyle;

  repeatCircle[0].style.background = "none";
  repeatCircle[0].style.color = "gray";
  underCircles[0].style.color = "gray";
  relative3[0].style.width = "48%";
  relative3[1].style.width = "48%";
  row35extra.style.width = "84%";

  row35extra.style.paddingLeft = "0px";
}

function hideFavorites() {
  chosen = "favorites";
  favoritesSidebar[0].style.display = "none";
  //startingDiv.style.paddingLeft = " 125px";
  // startingDiv.style.width = "100%";
  startingDiv.style = backupStyle;

  starCircle[0].style.background = "none";
  starCircle[0].style.color = "gray";
  underCircles[1].style.color = "gray";
  relative3[0].style.width = "48%";
  relative3[1].style.width = "48%";
  row35extra.style.width = "84%";
  row35extra.style.paddingLeft = "0px";
}

document.addEventListener("click", function (event) {
  if (chosen == "history") hideHistorySidebar(event);
  else if (chosen == "favorites") hideFavoritesSidebar(event);
});
