// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
	    // Preload large images.
	    let newImageSrc  = thumbnail.dataset.largeVersion;
	    let largeVersion = new Image();
	    largeVersion.src = newImageSrc

      // Set clicked image as main image.
      
      mainImage.setAttribute("src", newImageSrc);
      // Set corresponding alt for main image
      let newImgAlt = thumbnail.alt;
      mainImage.setAttribute("alt", newImgAlt);
      // Set clicked image as the current image
      let currentClass = "current";
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);
      // Set title and description of the selected image
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;
    });
  });
}