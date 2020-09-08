const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// 
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Toggle Mode Styles
function toggleMode(color) {
  const isLight = color==='light';
  nav.style.backgroundColor = (isLight) ? `rgb(255 255 255 / 50%)` : `rgb(0 0 0 / 50%)`;
  textBox.style.backgroundColor = (isLight) ? `rgb(0 0 0 / 50%)` : `rgb(255 255 255 / 50%)`;
  toggleIcon.children[0].textContent = (isLight) ? 'Light Mode' : 'Dark Mode';
  (isLight) ?
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') :
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode(color);
  (isLight) ? toggleSwitch.checked=false : toggleSwitch.checked=true;
  localStorage.setItem('theme', color);
}

// Switch Theme Dynamically
function switchTheme(evt)  {
  if(evt.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleMode('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    toggleMode('light');
  }
}

toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for Theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  toggleMode(currentTheme);
}