var btnPreOrder = document.getElementById("preOrder");
var btnInOrder = document.getElementById("inOrder");
var btnPostOrder = document.getElementById("postOrder");
var block =document.getElementsByTagName("div");

window.onload = generateTree();

function generateTree(){
	
	for (var i = 0;i < block.length;i++){
		block[i].leftChild = block[i].firstElementChild;
		block[i].rightChild = block[i].lastElementChild;
	}
}

function preOrder(node){
	if(!(node == null)){
		console.log(node);
		node.style.backgroundColor = "#66FF66";
		node.parentNode.style.backgroundColor = "#ffffff";
		window.setTimeout(preOrder(node.leftChild), 1000);
		window.setTimeout(preOrder(node.rightChild), 2000);
	}
}		

function inOrder(node){
	if (!(node == null)){
		inOrder(node.leftChild);
		//======
		inOrder(node.rightChild);
	}
}

function postOrder(node){
	if (!(node == null)){
		postOrder(node.leftChild);
		postOrder(node.rightChild);
		//======
	}
}


btnPreOrder.onclick = function(){
	preOrder(block[0]);
}

btnInOrder.onclick = function(){
	
}

btnPostOrder.onclick = function(){
	
}

