/* Global Variables */
const elements = ['red', 'blue', 'orange', 'beige', 'grey', 'purple', 'pink', 'green', 'lightblue', 'black', 'white', 'brown', 'yellow'];  

const btn = document.getElementById('btn');
const titleContent = document.querySelector('.background-color');
const titleColor = document.getElementById('background-color');

// Changing background color
const container = document.getElementById('container');

btn.addEventListener('click', function () {
    
    const randomNumber = getRandomNumber();

    // There will be the function which will change the color of the background
    
    container.style.backgroundColor = elements[randomNumber];

    titleContent.textContent = elements[randomNumber];
    titleColor.style.color = elements[randomNumber];
})

// Creating the randonNumber function

function getRandomNumber() {
    return nRandom = Math.floor(Math.random() * elements.length);
}