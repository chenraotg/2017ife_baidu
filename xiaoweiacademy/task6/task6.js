function addEllipsis(){
	var contents = document.getElementsByClassName("contents");
	console.log(contents);
	for (var i = 0;i < contents.length;i++){
		var first = contents[i].firstElementChild;
		var last = contents[i].lastElementChild;
		var firstString = first.innerText;
		var lastString = last.innerText;
		console.log(firstString.length+lastString.length);
		var span = document.createElement("span");
		var length = 4 * (25 - firstString.length - lastString.length);
		var ellipsisStr = "";
		for (var j = 0;j < length;j++){
			var result = ellipsisStr.concat(".");
			var ellipsisStr = result;
	
		}
		var ellipsis = document.createTextNode(ellipsisStr);
		span.appendChild(ellipsis);
		console.log(ellipsisStr.length);
		contents[i].insertBefore(span, last);
	}	
}
addEllipsis();