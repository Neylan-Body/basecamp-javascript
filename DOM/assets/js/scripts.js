function changeMode(){
	changeClasses();
	changeText(h1);
	changeText(button);
}

function changeClasses(){
	body.classList.toggle(darkMode)
	button.classList.toggle(darkMode)
	footer.classList.toggle(darkMode)
	h1.classList.toggle(darkMode)
}

function changeText(element){
	var txt = element.textContent || element.innerText;
	txt.includes('Dark') ? txt = txt.replace('Dark', 'Light') : txt = txt.replace('Light', 'Dark')
	element.innerHTML = txt
	console.log(element.style);
}

const darkMode = 'dark-mode'
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]

button.addEventListener('click', changeMode)