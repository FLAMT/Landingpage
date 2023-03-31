var navbar = document.querySelector(".navbar");
// when the scroll is higher than 20 viewport height, add the sticky class to the tag with a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// navbar Toggler

const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle) {
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// closing menu when navlink is clicked 
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction))
// Product Colors

var pic = document.querySelector('#main-shoe');
var blue = document.querySelector('.blue');
var red = document.querySelector('.red');
var silver = document.querySelector('.silver');
var gray = document.querySelector('.gray');
var black = document.querySelector('.black');
var white = document.querySelector('.white');
const colors = document.querySelectorAll('.color');
// Store Product Info In Object

var info = [
	
	{	
		src: "images/products/blue.jpg"
	},
	{
		src: "images/products/red.jpg"
	},
	{
		src: "images/products/silver.jpg"
	},
	{
		src: "images/products/gray.jpg"
	},
	{
		src: "images/products/black.jpg"
	},
	{
		src: "images/products/white.jpg"
	}
]

// Change Color
blue.addEventListener("click", function() {
	pic.src = info[0].src;
})
red.addEventListener("click", function() {
	pic.src = info[1].src;
})
silver.addEventListener("click", function() {
	pic.src = info[2].src;
})
gray.addEventListener("click", function() {
	pic.src = info[3].src;
})
black.addEventListener("click", function() {
	pic.src = info[4].src;
})
white.addEventListener("click", function() {
	pic.src = info[5].src;
})

// active color
function color() {
	colors.forEach(c => c.classList.remove('active'));
	this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));