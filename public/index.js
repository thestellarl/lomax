var upload = document.getElementById('upload-button');
var modalBackdrop = document.getElementById('modal-backdrop');
var modal = document.getElementById('upload-track');

var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
upload.onclick = function() {
 modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
 modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
 }
}

function toggleEntry(element){
  var body = element.querySelector("#accountAction");
  element.querySelector(".arrowIcon").classList.toggle('rotate90');
  // element.querySelector("accountAction").classList.toggle('showDropDown');    
};

var follow = document.getElementById('follow-button');
var edit = document.getElementById('edit-button');
var bio = document.getElementById('bio');

function followFunction(){
  console.log("test");
  alert("Followed!");
  follow.innerHTML = "Following";
}
if(follow) {
  follow.addEventListener('click', followFunction);
}



function editFunction(){
  var newbio = prompt("Please enter your new bio: ");
  console.log("New bio: ", newbio);
  bio.innerHTML = newbio;
}
if (edit) {
  edit.addEventListener('click', editFunction);
} 