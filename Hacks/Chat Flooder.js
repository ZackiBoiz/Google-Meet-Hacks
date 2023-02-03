(function() {
	try {
		clearInterval(timer);
		document.removeEventListener("keydown", listener);
	} catch (e) {}
	
	let textarea = ".iL4fNe.qqWwaf.edOlkc.kxz0kd.orScbe.cfWmIb.VfPpkd-fmcmS-yrriRe-OWXEXe-INsAgc.VfPpkd-fmcmS-yrriRe-OWXEXe-di8rgd-V67aGc.VfPpkd-fmcmS-yrriRe-OWXEXe-B7I4Od.VfPpkd-ksKsZd-mWPk3d.VfPpkd-fmcmS-yrriRe-OWXEXe-mWPk3d.VfPpkd-fmcmS-yrriRe > .VfPpkd-fmcmS-wGMbrd";
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

	function genRand(length) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789=/+_-!@#$%^&*()`~{}[]<>,.?\\\'";:';
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
			}
		});
	});

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
