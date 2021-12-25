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
		var navs = document.querySelector("nav");
		var height = document.documentElement.scrollTop || document.body.scrollTop
		console.log(height);
		if (height >= 140) {
			navs.style.position = 'fixed';
			navs.style.top = '0';
		} else {
			navs.style.position = 'static';
		}
	}

	// 轮播图start
	var adv = document.querySelector('.adv');
	var arrowLeft = document.querySelector('.arrowLeft');
	var arrowRight = document.querySelector('.arrowRight');
	adv.addEventListener('mouseenter', function() { //鼠标滑过显示左右按钮
		arrowLeft.style.display = 'block';
		arrowRight.style.display = 'block';
		clearInterval(timer); //鼠标经过不自动轮播
		timer = null; //清除定时器变量
	});
	adv.addEventListener('mouseleave', function() { //鼠标滑走隐藏左右按钮
		arrowLeft.style.display = 'none';
		arrowRight.style.display = 'none';
		timer = setInterval(function() { //鼠标离开自动轮播
			arrowRight.click(); //手动调用点击事件
		}, 3000);
	});
	//动态生成圆点
	var ul = adv.querySelector('ul');
	var ol = adv.querySelector('ol');
	// 动画函数start(向左)
	function animate(obj, target) {
		clearInterval(obj.timer); //停止定时器
		obj.timer = setInterval(function() {
			var step = (target - obj.offsetLeft) / 10;
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
			if (obj.offsetLeft == target) {
				clearInterval(obj.timer); //停止动画
			}

			obj.style.left = obj.offsetLeft + step + 'px'; //偏移量返回没有单位
		}, 15);
	}
	// 动画函数end
	for (var i = 0; i < ul.children.length; i++) {
		var li = document.createElement('li'); //创建一个li
		//用自定义属性记录圆点的索引号
		li.setAttribute('index', i);
		ol.appendChild(li); //添加到ol
		//创建圆点同时绑定点击事件
		li.addEventListener('click', function() {
			for (var i = 0; i < ol.children.length; i++) {
				ol.children[i].className = ''; //先清除所有圆点的选中状态
			}
			this.className = 'bgWhite'; //点击当前圆点设置选中状态	
			var index = this.getAttribute('index'); //获得li索引号
			//把li索引号给num
			num = index;
			//把li索引号给circle
			circle = index;
			animate(ul, -index * 1200);
		});
	}
	ol.children[0].className = 'bgWhite'; //设置选中状态
	//克隆第一张图片在最后
	var first = ul.children[0].cloneNode(true);
	ul.appendChild(first);
	// 右边按钮
	var num = 0;
	var circle = 0;
	arrowRight.addEventListener('click', function() {
		if (num == ul.children.length - 1) {
			ul.style.left = 0;
			num = 0;
		}
		num++;
		animate(ul, -num * 1200);
		circle++; //点击右侧按钮，圆点随之变化
		if (circle == ol.children.length) {
			circle = 0; //到最后一张图是重新到第一个圆点
		}
		circleChange(); //调用函数
	});
	// 左边按钮
	arrowLeft.addEventListener('click', function() {
		if (num == 0) {
			num = ul.children.length - 1;
			ul.style.left = -num * 1200 + 'px';
		}
		num--;
		animate(ul, -num * 1200);
		circle--; //点击右侧按钮，圆点随之变化
		if (circle < 0) {
			circle = ol.children.length - 1; //到第一张图是重新到最后一个圆点
		}
		circleChange(); //调用函数
	});

	function circleChange() {
		for (var i = 0; i < ol.children.length; i++) {
			ol.children[i].className = ''; //先取消所有圆点选中状态
		}
		ol.children[circle].className = 'bgWhite'; //设置选中状态
	}
	//自动播放
	var timer = setInterval(function() {
		arrowRight.click(); //手动调用点击事件
	}, 4000);
	// 轮播图end
});
