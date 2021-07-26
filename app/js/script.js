function ScrollUp() {
	let s, t, p;
	p = document.body.scrollTop || window.pageYOffset;
	s = document.body.scrollTop || window.pageYOffset;
	t = setInterval( function() {
	if(s > 0) 
		window.scroll(0, s -= 100);
		else 
			clearInterval(t)
	},10);
	if (p > 100) {
		document.getElementsByClassName('.scrollup').style.display = 'block';
	} else {
		document.getElementsByClassName('.scrollup').style.display = 'none';
	}
}
//--------------------------------------------------------------------
(function () {
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.burger-menu__list');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        menu.classList.toggle('burger-list-active');
    });
}());