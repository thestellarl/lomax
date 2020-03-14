var upload = document.getElementById('upload-button');
var modalBackdrop = document.getElementById('modal-backdrop');
var modal = document.getElementById('upload-track');

var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
function uploadFunction() {
 modal.style.display = "block";
}
if(upload) {
  upload.addEventListener('click', uploadFunction)
}

// When the user clicks on <span> (x), close the modal
function spanFunction() {
 modal.style.display = "none";
}
if(span) {
  span.addEventListener('click', spanFunction)
}

// When the user clicks anywhere outside of the modal, close it
function windowFunction(event) {
  if (event.target == modal) {
    modal.style.display = "none";
 }
}

if(window) {
  window.addEventListener('click', windowFunction)
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