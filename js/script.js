// console.log('test')
var filterknop = document.querySelector('.h2f');
var filterblok = document.querySelector('form');

function showKnop(){
	filterblok.classList.toggle('showfilter');
}

filterknop.addEventListener('click', showKnop);

// console.log(filterblok)
// console.log(filterknop)