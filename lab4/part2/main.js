const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const array = ["pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg"]

/* Declaring the alternative text for each image file */

const object = {"pic1.jpg" : "humaneye",
                "pic2.jpg" : "whitestone",
                "pic3.jpg" : "lavender flowers",
                "pic4.jpg" : "paintings",
                "pic5.jpg" : "butterfly"}

/* Looping through images */

for (const i of array){
    const newones = document.createElement("img");
    newones.setAttribute("source",array[i]);
    newones.setAttribute("alt",object[i]);
    thumbBar.appendChild(newones);
    newones.addEventListener("click",(images)=>{
        displayedImage.source = images.target.source;
        displayedImage.alt = images.target.alt;
    });


}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
