const extendHex = (shortHex) => {
	let s = "";
	for (let i=0; i<shortHex.length; i++) {
		if (shortHex.charAt(i) !== '#') {
			let ct = 2;
			
			while (ct > 0) {
				s += shortHex.charAt(i);
				ct--;
			}
		}
	}
	return '#' + s;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.")
alert(extendHex(shortHex));