window.addEventListener("load", function() {
	var server = document.querySelector('.server');
	var serverdown = document.querySelector('.serverdown').querySelector("ul");
	server.onmouseover = function() {
		serverdown.style.display = 'block';
		serverdown.className = 'menu1';
	}
	serverdown.onmouseover = function() {
		serverdown.style.display = 'block';
	}
	server.onmouseout = function() {
		serverdown.style.display = 'none';
	}
	serverdown.onmouseout = function() {
		serverdown.style.display = 'none';
	}
});
