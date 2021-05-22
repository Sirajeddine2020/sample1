function imgSlider(imgsrc) {
	document.querySelector('.Selja').src = imgsrc;
}
function changeCircleColor(color) {
	const circle = document.querySelector('.circle');
	circle.style.background = color;
}

// function addMarginTop(x) {
// 	const social = document.getElementsByClassName('socialM');
// 	social.style.marginTop = `${x}% !important`;
// }

function toggleShow() {
	var x = document.getElementById('suite');
	var style = window.getComputedStyle(x);
	var display = style.getPropertyValue('display');
	if (display === 'none') {
		x.style.display = 'block';
		x.nextElementSibling.innerHTML = 'See less';
	} else {
		x.style.display = 'none';
		document.getElementById('learn').innerHTML = 'Learn More';
	}
}

// document.getElementById('learn').addEventListener('click', function(event) {
// 	event.preventDefault;
// 	toggleShow();
// });
