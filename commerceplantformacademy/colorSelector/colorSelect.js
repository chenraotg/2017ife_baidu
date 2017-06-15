
//条形选择器构造器，传入的分别是颜色的初始值（HSV）数组，初始位置，最大位置，颜色条和按钮的DOM
let BarSelector = function(defaultColor, defaultPos, maxpos, bar, barBall){
	this.color = defaultColor;
	this.barBallPos = defaultPos;
	this.maxPos = maxpos;
	this.bar = bar;
	this.bar.self = this;
	this.barBall = barBall;
	this.barBall.self = this;
}

BarSelector.prototype.pick = function(){
	let h = fixed((this.barBallPos / this.maxPos) * 360);
	let s = 1;
	let v = 1;
	
	this.color = [h, s, v];
	
	let rgbArr = hsv2rgb(h, s, v);//获得rgb颜色
	
	let color = 'rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})';
	this.barBall.style.background = color;//设置按钮颜色
	
	colorPanel.render(color);//渲染取色板
}

BarSelector.prototype.setPos = function(e){
	this.barBallPos = e.offsetY;
	this.btn.style.top = this.barBallPos + 'px';
	
	this.pick();
	
	
	
}

BarSelector.prototype.move= function(e){
	let oldPos = this.oldPos;
	
	let startPos = this.startPos;
	
	let distance = e.pageY - startPos;
	
	this.barBallPos = oldPos + distance;
	
	if (this.barBallPos < 0){
		this.barBallPos = 0;
	} else if (this.barBallPos > this.maxPos){
		this.barBallPos = this.maxPos;
	}
	
	this.barBall.style.top = this.barBallPos + 'px';
	
	this.pick();
}

//条形选择器实例
let barSelector = (function(){
	let defaultColor = [360, 1, 1];//hsv
	
	let bar = document.getElementById("bar");
	let barBall = document.getElementById("barBall");

	bar.onclick = function(e){
		
	}
	
	barBall.addEventListener('mousedown', function(e){
		e.preventDefault();
		
		barBall.self.startPos = e.pageY;
		barBall.self.oldPos = btn.self.btnPos;
		window.addEventListener('mousemove', t);
		
	});
	return new BarSelector(defaultColor, 0, 400, bar, barBall);
})();

//面板选择器构造器，传入的是按钮实例
let PanelSelector = function(defaultX, defaultY, maxX, maxY, btn, canvas, pickedColorE1, value){
	this.color = [];
	this.x = defaultX;
	this.y = defaultY;
	this.maxX = maxX;
	this.maxY = maxY;
	this.btn = btn;
	this.btn.self = this;
	this.panel = panel;
	this.panel.self = this;
	this.pickedColorE1 = pickedColorE1;
	this.value = value;
	
}

PanelSelector.prototype.pickByRGB = function(){//根据RGB值进行取色
	let r = selectors.rgb.R.val;
	let g = selectors.rgb.G.val;
	let b = selectors.rgb.B.val;
	
	let hsvArr = rgb2hsv(r, g, b);
	
	let h = hsvArr[0];
	let s = hsvArr[1];
	let v = hsvArr[2];
	
	this.x = s * this.maxX;
	this.y = this.maxY - v * this.maxY;
	this.btn.style.left = this.x + 'px';
	this.btn.style.top = this.y + 'px';
	
	barSelector.btnPos = fixed(barSelector.maxPos * (h / 360));
}

PanelSelector.prototype.pickByHSL = function(){//根据HSL值进行取色
	let h = selectors.hsl.H.val;
	let s = selectors.hsl.S.val;
	let l = selectors.hsl.L.val;
	
	let hsvArr = hsl2hsv(h, s, l);
	
	h = hsvArr[0];
	s = hsvArr[1];
	v = hsvArr[2];
	
	this.x = s * this.maxX;
	
}

let panelSelector = (function(){
	let panelBall = document.getElementById('panelBall');
	
	let panel = document.getElementById('panel');
	
	let pickedColorEl = document.getElementById('pickedColor');
	
	let rgb = document.getElementById('rgb');
	let hsl = document.getElementById('hsl');
	let hsv = document.getElementById('hsv');
	
	let value = {
		rgb,
		hsl,
		hsv
	};
	
	//事件绑定
	panel.onclick = function(e){
		panel.self.setPos(e);
	}
	
	//这是啥？？
	let t = throttleV2(function(e){
		btn.self.move(e);
	}, 15, 30);//必须确保调用点的this指向是PanelSelector对象
	
	panelBall.addEventListener('mousedown', function(e){
		e.preventDefault();
		btn.self.startPos = {
			x:e.pageX,
			y:e.pageY
		}
		panelBall.self.oldPos = {
			x:panelBall.self.x,
			y:panelBall.self.y
		}
		window.addEventListener('mousemove', t);
	});
	window.addEventListener('mouseup', function(){
		window.removeEventListener('mousemove', t);
	});
	
	return new PanelSelector(100, 0, 400, 400, panelBall, pickedColorEl, value);
})();

//鼠标点击后获得的颜色都是以hsv来计算，然后转换成rgb和hsl
let colorPanel = (function(){
	let canvas = document.getElementById('panel');
	let ctx = canvas.getContext('2d');
	
	let lightGradient = ctx.createLinearGradient(0, 0, 0, 400);//亮度渲染
	
	lightGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');//????
	lightGradient.addColorStop(1, 'rgba(0, 0, 0, 1)');//????
	
	return{
		render:function(color){
			ctx.clearRect(0, 0, 400, 400)//清除画布
			
			let colorGradient = ctx.createLinearGradient(0, 0, 400, 0);//颜色渲染
			
			colorGradient.addColorStop(0 , 'rgb(255, 255, 255)');
			colorGradient.addColorStop(1, color);
			
			ctx.fillStyle = colorGradient;
			ctx.fillRect(0, 0, 400, 400);
			
			ctx.fillStyle = lightGradient;
			ctx.fillRect(0, 0, 400, 400);
		}
	}
})();

let init = (() => {
	new Clipboard('#rgbBtn');
	new Clipboard('#hslBtn');
	new Clipboard('#hsvBtn');
	
	barSelector.pick();
	panelSelector.pick();
})();