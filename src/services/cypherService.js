const caesarDecrypt = (text, houseNumber) => {
	const alfabetoNormal = 'abcdefghijklmnopqrstuvwxyz';
	const alfabetoCifrado = alfabetoNormal.substr(houseNumber) + alfabetoNormal.substr(0, houseNumber);
	let textDecrypted = '';
	
	for (let index = 0; index < text.length; index++) {
		if(text[index] == ' ') {
			textDecrypted += ' ';
		} else if (alfabetoCifrado.indexOf(text[index]) == -1) {
			textDecrypted += text[index];
		} else {
			const indexCifrado = alfabetoCifrado.indexOf(text[index]);
			textDecrypted += alfabetoNormal[indexCifrado];	
		}
	}

	return textDecrypted;
}

module.exports = {
	caesarDecrypt
}