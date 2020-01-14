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
		if (node.classList !== undefined) {
			for (let i = 0; i < node.classList.length; i++) {
				if (node.classList[i].includes(classNAME)) {
					console.log(node.classList[i], "WE ARE PUSHING THIS VALUE RIGHT NOWs");
					results.push(node);
				}
			}
		}

		if (node.childNodes.length > 0) {
			for (let i = 0; i < node.childNodes.length; i++) {
				checkNode(node.childNodes[i]);
			}
		}
	}
	checkNode(document.body);
	console.log(results);
	return results;
};
