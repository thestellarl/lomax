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

const searchInput = document.getElementById('search-input')[0];


// sell.addEventListener('click', function(event){
//     modal.style.display = "block";
//     modalBackdrop.style.display = "block";
//  });

//  var textInput = document.getElementById('post-text-input');
//  var imgInput = document.getElementById('post-photo-input');
//  var priceInput = document.getElementById('post-price-input');
//  var cityInput = document.getElementById('post-city-input');

// function selectButton(){
//      var chosenCondition = document.querySelector('input[name="post-condition"]:checked');
//      return chosenCondition.value;
//  }

//  function addObject(){
//     var objectSection = document.createElement('div');
//     objectSection.classList.add("post");

//     objectSection.setAttribute('data-price', priceInput.value);
//     objectSection.setAttribute('data-city', cityInput.value);
//     objectSection.setAttribute('data-condition', selectButton());

//     var objectContents = document.createElement('div');
//     objectContents.classList.add('post-contents');
//     objectSection.appendChild(objectContents);

//     var objectPhoto = document.createElement('div');
//     objectPhoto.classList.add('post-image-container');
//     objectContents.appendChild(objectPhoto);

//     var realPhoto = document.createElement('img');
//     realPhoto.src = imgInput.value;
//     objectPhoto.appendChild(realPhoto);

//     var sectionInfo = document.createElement('div');
//     sectionInfo.classList.add('post-info-container');
//     objectContents.appendChild(sectionInfo);

//     var sectionTitle = document.createElement('a');
//     sectionTitle.setAttribute('href', '#');
//     sectionTitle.classList.add('post-title');
//     sectionTitle.textContent = textInput.value;
//     sectionInfo.appendChild(sectionTitle);

//     var sectionPrice = document.createElement('span');
//     sectionPrice.classList.add('post-price');
//     sectionPrice.textContent = '$' + priceInput.value;
//     sectionInfo.appendChild(sectionPrice);

//     var sectionCity = document.createElement('span');
//     sectionCity.classList.add('post-city');
//     sectionCity.textContent = '(' + cityInput.value + ')';
//     sectionInfo.appendChild(sectionCity);

//     postSection.appendChild(objectSection);

// }

// makePost.onclick = function(){
//     if(emptyModal()){
//         alert("Please provide values for all input fields");
//         return false;
//     }
//     addObject();
//     exitModal();
//     return true;
// }