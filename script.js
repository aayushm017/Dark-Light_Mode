//Making a const for everything we would like to change..
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';


//Dark or Light images for clean code
function imageMode(color) {  
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`
}

//For clean code
function toggleDarkLightMode(isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)': 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)':'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode':'Light Mode';  //Text value of toggler (when we switch on the dark mode the text will be written there dark mode) or vice-versa..
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon'): toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');  //same as above when we switch on, sun icon will be removed and switch off moon icon will be removed or vice-versa..
    isDark ? imageMode('dark'): imageMode('light');
}


//Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {  //Check if the toggler is clicked and set to true
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');  //Saving this dark mode data for future reopening of the website.
        toggleDarkLightMode(true);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');  //Saving this light mode data for future reopening of the website
        toggleDarkLightMode(false);
    }
}

//Event Listener
toggleSwitch.addEventListener('change', switchTheme);

//Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode;
    }
}