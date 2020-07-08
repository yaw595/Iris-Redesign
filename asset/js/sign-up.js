
/***********************
 * Navbar Menu expand
 */
$(document).ready(function () {
	var scroll_pos = 0;
	$(document).scroll(function () {
	  scroll_pos = $(this).scrollTop();
	  if (scroll_pos > 100) {
		$(".top-stuff").css('background-color', 'white');
	  } else {
		$(".top-stuff").css('background-color', 'transparent');
	  }
	});
	}); 
	
	console.clear();
	
	const app = (() => {
	let body;
	let menu;
	let menuItems;
	
	const init = () => {
	  body = document.querySelector('body');
	  menu = document.querySelector('.menu-icon');
	  menuItems = document.querySelectorAll('.nav__list-item');
	
	  applyListeners();
	}
	
	const applyListeners = () => {
	  menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
	}
	
	const toggleClass = (element, stringClass) => {
	  if (element.classList.contains(stringClass))
		element.classList.remove(stringClass);
	  else
		element.classList.add(stringClass);
	}
	
	init();
	})();


/*********************
 * Form input
 */
const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});




