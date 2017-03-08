var tags = document.querySelectorAll('#problem-tags .problem-tag');
if(tags.length > 0) {

	var target = tags[0].parentNode.parentNode;
	var node = document.createElement("a"); 
	var textnode = document.createTextNode("Show tags");
	node.appendChild(textnode);
	node.href = "javascript:void(0)";
	target.appendChild(node);
	node.addEventListener("click", function(){
		node.style.display = 'none';
		for (var i = 0; i < tags.length; ++i) {
			tags[i].style.display = 'inline';
		}
	});
}