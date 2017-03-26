var btnSearch = document.getElementById("search");
var btnInput = document.getElementById("generate");

btnInput.onclick = function(){
	var textArea = document.getElementById("textArea");	
	var txt = textArea.value;	//多行文本域的值
	var place = document.getElementById("place");	//获得place
	place.innerHTML = "";
	var pattern = new RegExp("[\,\;\n\\s\、\.\。\，]","g");
	arr = txt.split(pattern);
	console.log(arr);
	for(var i = 0;i < arr.length;i++){
		var node = document.createElement("span");
		node.innerText = arr[i];
		place.appendChild(node);
	}
}

btnSearch.onclick = function (){
	var span = document.getElementsByTagName("span");
	for (var i = 0;i < span.length;i++){
		span[i].className = "";
	}
	var searchText = document.getElementById("input").value;
	for (var i = 0;i < span.length;i++){
		console.log(typeof(arr[i]));
		if (arr[i].indexOf(searchText) != -1){
			span[i].className = "finished";
		}
	}
}