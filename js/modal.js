// Get the modal
var modalOne = document.getElementById("modalOne");
var modalTwo = document.getElementById("modalTwo");
var modalThree = document.getElementById("modalThree");
var modalFour = document.getElementById("modalFour");
var modalFive = document.getElementById("modalFive");
var modalSix = document.getElementById("modalSix");

// Get the image id that opens the modal
var projOne = document.getElementById("projOne");
var projTwo = document.getElementById("projTwo");
var projThree = document.getElementById("projThree");
var projFour = document.getElementById("projFour");
var projFive = document.getElementById("projFive");
var projSix = document.getElementById("projSix");

// Get the <span> element that closes the modal
var spanOne = document.getElementsByClassName("close")[0];
var spanTwo = document.getElementsByClassName("close")[1];
var spanThree = document.getElementsByClassName("close")[2];
var spanFour = document.getElementsByClassName("close")[3];
var spanFive = document.getElementsByClassName("close")[4];
var spanSix = document.getElementsByClassName("close")[5];

// When the user clicks on the image, open the modal
projOne.onclick = function() {
  modalOne.style.display = "flex";
  modalOne.style.justifyContent = "center";
  modalOne.style.alignContent = "center";
}

projTwo.onclick = function() {
  modalTwo.style.display = "flex";
  modalTwo.style.justifyContent = "center";
  modalTwo.style.alignContent = "center";
}

projThree.onclick = function() {
  modalThree.style.display = "flex";
  modalThree.style.justifyContent = "center";
  modalThree.style.alignContent = "center";
}

projFour.onclick = function() {
  modalFour.style.display = "flex";
  modalFour.style.justifyContent = "center";
  modalFour.style.alignContent = "center";
}

projFive.onclick = function() {
  modalFive.style.display = "flex";
  modalFive.style.justifyContent = "center";
  modalFive.style.alignContent = "center";
}

projSix.onclick = function() {
  modalSix.style.display = "flex";
  modalSix.style.justifyContent = "center";
  modalSix.style.alignContent = "center";
}

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function() {
  modalOne.style.display = "none";
}

spanTwo.onclick = function() {
  modalTwo.style.display = "none";
}

spanThree.onclick = function() {
  modalThree.style.display = "none";
}

spanFour.onclick = function() {
  modalFour.style.display = "none";
}

spanFive.onclick = function() {
  modalFive.style.display = "none";
}

spanSix.onclick = function() {
  modalSix.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalOne) {
    modalOne.style.display = "none";
  } else if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  } else if (event.target == modalThree) {
    modalThree.style.display = "none";
  } else if (event.target == modalFour) {
    modalFour.style.display = "none";
  } else if (event.target == modalFive) {
    modalFive.style.display = "none";
  } else if (event.target == modalSix) {
    modalSix.style.display = "none";
  }
}
