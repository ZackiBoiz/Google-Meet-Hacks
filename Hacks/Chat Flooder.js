(function() {
	try {
		clearInterval(timer);
		document.removeEventListener("keydown", listener);
	} catch (e) {}

	let textarea = ".VfPpkd-fmcmS-wGMbrd";
	let randlen;
	let stringgen;
	let randgenbool = true;
	if (confirm("Do you want to generate a custom string?")) {
		stringgen = prompt("Enter a string", "ZackiBoiz is cool!");
		if (!stringgen) {
			stringgen = "ZackiBoiz is cool!";
		}
		randgenbool = false;
	} else {
		randlen = parseInt(prompt("How many characters for random string?", "25"));
		if (!randlen) {
			randlen = 25;
		}
		randgenbool = true;
	}
	let ms = parseInt(prompt("Enter [millisecond] delay between intervals:", "50"));

	function genRand(length) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=/+_-!@#$%^&*()`~{}[]<>,.?\\\'";:|';
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter++;
		}
		return result;
	}

	let timer = setInterval(function() {
		document.querySelectorAll(textarea).forEach(i => {
			i.focus();
			if (!i.value) {
				i.value = randgenbool ? genRand(randlen) : stringgen;
			} else {
				const ke = new KeyboardEvent('keydown', {
					code: 'Enter',
					key: 'Enter',
					charCode: 13,
					keyCode: 13,
					view: window,
					bubbles: true
				});
				i.dispatchEvent(ke);
			}
		});
	}, ms);

	let listener = function(e) {
		if (e.key.toLowerCase() == "escape") {
			clearInterval(timer);
			document.removeEventListener("keydown", listener);
			alert("Stopped chat flooder.");
			return;
		}
	};
	document.addEventListener("keydown", listener);
})();
