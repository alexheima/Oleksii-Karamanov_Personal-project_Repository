
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");


hamburger.addEventListener("click", mobileMenu);



navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


const gallery = document.querySelector('.gallery');
const images = gallery.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('click', () => {
    const fullImage = document.createElement('img');
    fullImage.src = img.src;
    fullImage.style.width = '100%';
    fullImage.style.height = '100%';
    gallery.innerHTML = '';
    gallery.appendChild(fullImage);
  });
});



function fullView(imgLink){
  document.getElementById("fullImage").src = imgLink;
  document.getElementById("fullImageView").style.display = "block";
}
function closeFullView(){
  document.getElementById("fullImageView").style.display = "none";

}








// const gallery = document.querySelector('.gallery');
// const images = gallery.querySelectorAll('img');

// images.forEach(img => {
//   img.addEventListener('click', () => {
//     const fullImage = document.createElement('img');
//     fullImage.src = img.src;
//     fullImage.style.width = '100%';
//     fullImage.style.height = 'auto';
//     gallery.innerHTML = '';
//     gallery.appendChild(fullImage);
//   });
// });











