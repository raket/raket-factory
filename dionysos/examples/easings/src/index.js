import "../../../src/sass/style.scss";
import "./style.scss";

let demoWrapper = document.getElementsByClassName('demo-wrapper')[0];
let easeOptions = document.getElementsByClassName('ease-options')[0];
let button = document.getElementsByClassName('button')[0];
let currentEase = '';

button.addEventListener('click', (e) => {
	e.preventDefault();

	if( currentEase != '') demoWrapper.classList.remove(currentEase);

	if( !demoWrapper.classList.contains('running') ){
		demoWrapper.classList.add('running');
		currentEase = easeOptions.options[easeOptions.selectedIndex].value
		demoWrapper.classList.add(currentEase);
		button.innerHTML = 'Stop';
	}else{
		demoWrapper.classList.remove('running');
		button.innerHTML = 'Start';
	}
});
