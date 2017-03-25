var btnSearch = document.getElementById("search");
var btnInput = document.getElementById("input");

btnInput.onclick = function(){
	var textArea = document.getElementById("textArea");	
	var txt = textArea.value;	//多行文本域的值
	var input = document.getElementById("input");	//	
	var searchText = input.value;	//输入框的值
	var pattern = new RegExp("[\,\.\、\\n\\s]","g");
	var arr = txt.split(pattern,txt);
	for(var i = 0;i < arr.length;i++){
		
		
	}
}

btnSearch.onclick = function (){
	
	
}