window.addEventListener("load", function() {
	// 生成随机验证码
	var swap = document.querySelector(".yzmp");
	var swapidea = document.querySelector(".ideap");
	var imgArr = ['img/yzm1.jpg', 'img/yzm2.jpg', 'img/yzm3.jpg',
		'img/yzm4.jpg', 'img/yzm5.jpg', 'img/yzm6.jpg', 'img/yzm7.jpg',
		'img/yzm8.jpg', 'img/yzm9.jpg', 'img/yzm10.jpg', 'img/yzm11.jpg'
	]; //图片路径数组
	swap.onclick = function() {
		var imgnum = imgArr.length - 1; //图片张数
		var randnum = Math.random(); //生成 [0 ~ 1) 之间的随机数
		var rand = Math.round(randnum * 10); //四舍五入
		swap.src = imgArr[rand];
	}
	swapidea.onclick = function() {
		var imgnum = imgArr.length - 1; //图片张数
		var randnum = Math.random(); //生成 [0 ~ 1) 之间的随机数
		var rand = Math.round(randnum * 10); //四舍五入
		swapidea.src = imgArr[rand];
	}

	//切换登录
	var btn3 = document.getElementById("btn3");
	var btn4 = document.getElementById("btn4");
	var _info = document.querySelector(".info");
	var _idea = document.querySelector(".idea");
	var idea = document.querySelector("#idea");
	var info = document.querySelector("#info");
	btn3.onclick = function() {
		idea.style.display = "block";
		_idea.style.display = "block";
		_info.style.display = "none";
		info.style.display = "none";
	}
	btn4.onclick = function() {
		idea.style.display = "none";
		_idea.style.display = "none";
		_info.style.display = "block";
		info.style.display = "block";
	}

	// json部分 验证账号
	var xhr = new XMLHttpRequest();
	var ws = 0;
	xhr.open("GET", "login.json", true);
	xhr.send();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			ws = JSON.parse(xhr.responseText)
			var shows = document.getElementById("shows");
			var leisure1 = info.querySelector(".leisure").value;
			var leisure2 = idea.querySelector(".leisure").value;
			btn1.onclick = function() {
				var inputBox1 = document.getElementById("inputBox1").value;
				var inputBox2 = document.getElementById("inputBox2").value;
				var yzm1 = document.getElementById("yzm1").value;
				if (!inputBox1) {
					alert("请输入账号!");
				} else if (!inputBox2) {
					alert("请输入密码!");
				} else if (!yzm1) {
					alert("输入验证码");
				} else if (!leisure1) {
					shows.style.display = "block";
					shows.className = "shows";
				}
				for (var i = 0; i < ws.userArr.length; i++) {
					if (inputBox1 == ws.userArr[i].uname && inputBox2 == ws.userArr[i].password &&
						yzm1 != '') {
						window.open("student.html", "_self");
					}
				}
			}
		}
		btn2.onclick = function() {
			var inputBox3 = document.getElementById("inputBox3").value;
			var inputBox4 = document.getElementById("inputBox4").value;
			var yzm2 = document.getElementById("yzm2").value;
			if (!inputBox3) {
				alert("请输入账号!");
			} else if (!inputBox4) {
				alert("请输入密码!");
			} else if (!yzm2) {
				alert("输入验证码");
			} else if (!leisure2) {
				shows.style.display = "block";
				shows.className = "shows";
			}
			for (var i = 0; i < ws.userArr.length; i++) {
				if (inputBox3 == ws.userArr[i].uname && inputBox4 == ws.userArr[i].password &&
					yzm2 != '') {
					window.open("student.html", "_self");
				}

			}
		}
	}
});
