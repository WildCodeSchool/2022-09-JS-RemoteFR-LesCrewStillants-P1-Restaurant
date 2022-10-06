const modal = document.getElementById("myModal");

const button = document.getElementById("button");

const span = document.getElementsByClassName("close")[0];

const form = document.getElementsByClassName("formRes");

//affiche le modal
button.onclick = function() {
    modal.style.display = "block";
  };

//pour fermer avec la croix
  span.onclick = function() {
    modal.style.display = "none";
  };