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

let colorBar = function(){
	let 
	
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
		
		btn.
		
	})
})