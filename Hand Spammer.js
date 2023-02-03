(function() {
	try {
		clearInterval(timer);
		document.removeEventListener("keydown", listener);
	} catch (e) {}
	let elem = ".nRJCJ.rmHNDe.xHd4Cb.tmJved.fzRBVc.VfPpkd-Bz112c-LgbsSe";
	let ms = parseInt(prompt("Enter [millisecond] delay between clicks:", "50"));
	let timer = setInterval(function() {
		document.querySelector(elem).click();
	}, ms);
	let listener = function(e) {
		if (e.key.toLowerCase() == "escape") {
			clearInterval(timer);
			document.removeEventListener("keydown", listener);
			alert("Stopped hand spammer.");
			return;
		}
	};
	document.addEventListener("keydown", listener);
})();
