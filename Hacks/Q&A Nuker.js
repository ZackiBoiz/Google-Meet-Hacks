(function() {
	try {
		clearInterval(timer);
		document.removeEventListener("keydown", listener);
	} catch (e) {}

	let askbtn = ".We2kde.PDpWxe.OLiIxf.Rj2Mlf.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.VfPpkd-LgbsSe-OWXEXe-Bz112c-M1Soyc.VfPpkd-LgbsSe-OWXEXe-INsAgc.VfPpkd-LgbsSe > .VfPpkd-RLmnJb";
	let askfield = ".edOlkc.kxz0kd.orScbe.cfWmIb.VfPpkd-fmcmS-yrriRe-OWXEXe-SfQLQb-k4Qmrd-gmhCAd.VfPpkd-fmcmS-yrriRe-OWXEXe-INsAgc.VfPpkd-fmcmS-yrriRe-OWXEXe-di8rgd-V67aGc.VfPpkd-fmcmS-yrriRe-OWXEXe-B7I4Od.VfPpkd-ksKsZd-mWPk3d.VfPpkd-fmcmS-yrriRe-OWXEXe-mWPk3d.VfPpkd-fmcmS-yrriRe > .VfPpkd-fmcmS-wGMbrd";
	let anonbtn = ".VfPpkd-muHVFf-bMcfAe";

	let anon = true;
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

	anon = confirm("Do you want your Q&A to be anonymous?") ? true : false;

	let ms = parseInt(prompt("Enter [millisecond] delay between intervals:", "50"));

	let timer = setInterval(function() {
		document.querySelectorAll(askbtn).forEach(i => {
			i.focus();
			i.click();
		});
		document.querySelectorAll(askfield).forEach(i => {
			i.value = randgenbool ? genRand(randlen) : stringgen;
			document.querySelectorAll(anonbtn).forEach(i => i.checked = anon);
			const ke = new KeyboardEvent('keydown', {
				code: 'Enter',
				key: 'Enter',
				charCode: 13,
				keyCode: 13,
				view: window,
				bubbles: true
			});
			i.dispatchEvent(ke);
		});
	}, ms);

	let listener = function(e) {
		if (e.key.toLowerCase() == "escape") {
			clearInterval(timer);
			document.removeEventListener("keydown", listener);
			alert("Stopped Q&A flooder.");
			return;
		}
	};
	document.addEventListener("keydown", listener);

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
})();
