function toggleDropdown1() {
  console.log("DROPDOWN CALLED!");
  document.getElementById("dropdown1").style.display = "flex";
}

let myDiv = document.getElementById("dropdown1");
let showDivButton = document.getElementsByClassName("fa-angle-down");

document.addEventListener("click", function (event) {
  if (
    !myDiv.contains(event.target) &&
    !showDivButton[0].contains(event.target) &&
    !showDivButton[1].contains(event.target)
  ) {
    myDiv.style.display = "none";
  }
});
