const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

insertX = ["Willy the Goblin"
    ,"Big Daddy"
    ,"Father Christmas"]

insertY = ["the soup kitchen",
"Disneyland",
"the White House"]

insertZ = ["spontaneously combusted",
"melted into a puddle on the sidewalk",
"turned into a slug and crawled away"]


randomize.addEventListener('click', result);

function result() {

    newStory = newStory

    const xItem = randomValueFromArray(array)
    const yItem = randomValueFromArray(array)
    const zItem = randomValueFromArray(array)


    

    if(customName.value !== '') {
        const name = customName.value;

}

    if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

}

    story.textContent = ;
    story.style.visibility = 'visible';
}