window.addEventListener("load", function() {
	var special = document.querySelector("#special");
	var special1 = document.querySelector("#special1");
	var special2 = document.querySelector("#special2");
	var special3 = document.querySelector("#special3");
	var special4 = document.querySelector("#special4");
	var part1 = document.querySelector("#part1");
	var part2 = document.querySelector("#part2");
	var part3 = document.querySelector("#part3");
	var part4 = document.querySelector("#part4");

	special1.addEventListener("click", function() {
		special1.className = "select"
		special2.className = "cancel";
		special3.className = "cancel";
		special4.className = "cancel";
		part1.style.display = "block";
		part2.style.display = "none";
		part3.style.display = "none";
		part4.style.display = "none";
		special.style.height = "1500px";
	});
	special2.addEventListener("click", function() {
		special2.className = "select"
		special1.className = "cancel";
		special3.className = "cancel";
		special4.className = "cancel";
		part2.style.display = "block";
		part1.style.display = "none";
		part3.style.display = "none";
		part4.style.display = "none";
		special.style.height = "1200px";
	});
	special3.addEventListener("click", function() {
		special3.className = "select";
		special1.className = "cancel";
		special2.className = "cancel";
		special4.className = "cancel";
		part3.style.display = "block";
		part2.style.display = "none";
		part1.style.display = "none";
		part4.style.display = "none";
		special.style.height = "1600px";
	});
	special4.addEventListener("click", function() {
		special4.className = "select"
		special3.className = "cancel";
		special2.className = "cancel";
		special1.className = "cancel";
		part4.style.display = "block";
		part2.style.display = "none";
		part3.style.display = "none";
		part1.style.display = "none";
		special.style.height = "1100px";
	});
});
