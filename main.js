var painting = false
	canvas.onmousedown = function(a){
		painting = true
		var x = a.clientX
		var y = a.clientY
		var divA = document.createElement('div')
		divA.style = "width: 6px; height: 6px; background: black; border-radius: 3px; position: absolute; left: "+(x-3)+"px; top: "+(y-3)+"px;"//这里x和y不能写在引号里面,写在引号里面就成了字符串!要的是变量!
		canvas.appendChild(divA) 
	}
	canvas.onmousemove = function(a){
		if(painting){
			var x = a.clientX
			var y = a.clientY
			var divA = document.createElement('div')
			divA.style = "width: 6px; height: 6px; background: black; border-radius: 3px; position: absolute; left: "+(x-3)+"px; top: "+(y-3)+"px;"//这里x和y不能写在引号里面,写在引号里面就成了字符串!要的是变量!
			canvas.appendChild(divA) 
		}else{}
	}
	canvas.onmouseup = function(a){
		painting = false
	}