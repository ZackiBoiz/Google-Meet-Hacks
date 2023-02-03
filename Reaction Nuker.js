(function() {
	try {
		clearInterval(timer);
		document.removeEventListener("keydown", listener);
	} catch (e) {}
	let elem = ".iiJ4W";
	let ms = parseInt(prompt("Enter [millisecond] delay between intervals:", "50"));
	let timer = setInterval(function() {
		document.querySelectorAll(elem).forEach(i => i.click());
	}, ms);
	let listener = function(e) {
		if (e.key.toLowerCase() == "escape") {
			clearInterval(timer);
			document.removeEventListener("keydown", listener);
			alert("Stopped reaction nuker.");
			return;
		}
	};
	document.addEventListener("keydown", listener);
})();
