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
