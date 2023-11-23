const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const photos = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"]



/* Declaring the alternative text for each image file */
const alternatives = {"pic1.jgg":"human eye",
"pic2.jpg":"white stone","pic3.jpg":"lavender flowers","pic4.jpg":"painting image","pic5.jpg":"butterfly"}

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
