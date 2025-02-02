const menu = document.querySelector(".menu");
menu.classList.toggle("hide")
const menuButton = document.querySelector(".menu-button");

function toggleMenu()
{
  menu.classList.toggle("hide");
}

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
handleResize();
window.addEventListener("resize", handleResize);

menuButton.addEventListener("click", toggleMenu);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

  function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
        const element = event.target;
	// get the src attribute from that element and 'split' it on the "-"
        srcAttribute = element.getAttribute("src");
        split = srcAttribute.split("-");
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
        split.pop(3);
        split.push("full.jpeg");
        let image = split.join("-");
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
        html = viewerTemplate(image, "Hot Springs");
        header = document.querySelector("header");
        header.insertAdjacentHTML("beforebegin", html);
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
        xButton = document.querySelector(".close-viewer");
        xButton.addEventListener("click", closeViewer)

}

function closeViewer() {
    document.querySelector(".viewer").remove()
}
gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);