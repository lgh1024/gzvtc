// search部分
function search() {
	var inputBox = document.getElementById("inputBox").value;
	if (!inputBox) {
		alert("请输入关键字!");
	} else {
		alert("没有找到您搜索的内容!");
	}
}
// search部分
window.addEventListener("load", function() {
	window.onscroll = function() {
		// nav固定顶部
		var navs = document.querySelector("nav");
		var height = document.documentElement.scrollTop || document.body.scrollTop
		console.log(height);
		if (height >= 110) {
			navs.style.position = 'fixed';
			navs.style.top = '0';
		} else {
			navs.style.position = 'static';
		}
	}
	
	
	var recap1 = document.querySelector("#recap1");
	var recap2 = document.querySelector("#recap2");
	var recap3 = document.querySelector("#recap3");
	var recap4 = document.querySelector("#recap4");
	var recap = document.querySelector("#recap");
	var content1 = document.querySelector("#content1");
	var content2 = document.querySelector("#content2");
	var content3 = document.querySelector("#content3");
	var content4 = document.querySelector("#content4");
	
	recap1.addEventListener("click",function() {
		recap1.className = "select"
		recap2.className = "cancel";
		recap3.className = "cancel";
		recap4.className = "cancel";
		content1.style.display = "block";
		content2.style.display = "none";
		content3.style.display = "none";
		content4.style.display = "none";
		recap.style.height = "1900px";
	});
	recap2.addEventListener("click",function() {
		recap2.className = "select"
		recap1.className = "cancel";
		recap3.className = "cancel";
		recap4.className = "cancel";
		content2.style.display = "block";
		content1.style.display = "none";
		content3.style.display = "none";
		content4.style.display = "none";
		recap.style.height = "700px";
	});
	recap3.addEventListener("click",function() {
		recap3.className = "select";
		recap2.className = "cancel";
		recap1.className = "cancel";
		recap4.className = "cancel";
		content3.style.display = "block";
		content2.style.display = "none";
		content1.style.display = "none";
		content4.style.display = "none";
		recap.style.height = "2700px";
	});
	recap4.addEventListener("click",function() {
		recap4.className = "select"
		recap2.className = "cancel";
		recap3.className = "cancel";
		recap1.className = "cancel";
		content4.style.display = "block";
		content2.style.display = "none";
		content3.style.display = "none";
		content1.style.display = "none";
		recap.style.height = "700px";
	});
});
