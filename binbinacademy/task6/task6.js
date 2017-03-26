var btnSearch = document.getElementById("search");
var btnInput = document.getElementById("generate");

btnInput.onclick = function(){
	var textArea = document.getElementById("textArea");	
	var txt = textArea.value;	//多行文本域的值
	//console.log(txt);
	var place = document.getElementById("place");	//获得place
	var pattern = new RegExp("[\,\;\n\\s\、\.\。\，]","g");
	var arr = txt.split(pattern);
	console.log(arr);
	for(var i = 0;i < arr.length;i++){
		var node = document.createElement("span");
		node.innerText = arr[i];
		place.appendChild(node);
	}
}

btnSearch.onclick = function (){
	var span = document.getElementsByTagName("span");
	var searchText = document.getElementById("input").value;
	for (var i = 0;i < span.length;i++){
		console.log(searchText == span[i].innerText);
		if (searchText == span[i].innerText){
			span[i].className = "finished";
		}
	}
}