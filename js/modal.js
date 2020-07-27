// Get the modal
var modalOne = document.getElementById("modalOne");
var modalTwo = document.getElementById("modalTwo");
var modalThree = document.getElementById("modalThree");

// Get the image id that opens the modal
var projOne = document.getElementById("projOne");
var projTwo = document.getElementById("projTwo");
var projThree = document.getElementById("projThree");

// Get the <span> element that closes the modal
var spanOne = document.getElementsByClassName("close")[0];
var spanTwo = document.getElementsByClassName("close")[1];
var spanThree = document.getElementsByClassName("close")[2];

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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalOne) {
    modalOne.style.display = "none";
  } else if (event.target == modalTwo) {
    modalTwo.style.display = "none";
  } else if (event.target == modalThree) {
    modalThree.style.display = "none";
  }
}
