/* eslint-disable func-style */
/* eslint-disable indent */
/* eslint-disable space-before-blocks */
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(classNAME) {
	let results = [];

	function checkNode(node) {
		if (node.classList) {
			for (let i = 0; i < node.classList.length; i++) {
				if (node.classList[i] === classNAME) {
					results.push(node.classList[i]);
				}
			}
		}

		if (node.childNodes) {
			for (let x = 0; x < node.childNodes.length; x++) {
				checkNode(node.childNodes[x]);
			}
		}
	}
	checkNode(document.body);
	console.log(results);
	return results;
};
