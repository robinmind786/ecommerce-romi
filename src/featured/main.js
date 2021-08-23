window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	const mobileNav = document.querySelector('.mobile-bottom-nav');
	if (document.body.scrollUp || document.documentElement.scrollUp) {
		mobileNav.style.display = 'none';
	} else {
		mobileNav.style.display = 'block';
	}
}