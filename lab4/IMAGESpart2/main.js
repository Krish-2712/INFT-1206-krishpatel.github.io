const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const photos = ["pic1.jpg",`pic2.jpg`,"pic3.jpg","pic4.jpg","pic5.jpg"]



/* Declaring the alternative text for each image file */
const alternatives = {"pic1.jpg":"human eye",
"pic2.jpg":"white stone","pic3.jpg":"lavender flowers","pic4.jpg":"painting image","pic5.jpg":"butterfly"}

/* Looping through images */

for (const i of photos){


const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${i}`);
newImage.setAttribute('alt', alternatives[i]);
thumbBar.appendChild(newImage);
newImage.addEventListener("click", event =>{
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.alt;
});

}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click",()=>{
    const newButton = btn.getAttribute("class");
    if (newButton == "dark"){
        btn.setAttribute("class","light");
        btn.textContent = "lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else{
        btn.setAttribute("class","dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});
