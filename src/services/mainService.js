const fs = require('fs');
const axios = require('axios').default;
const sha1 = require('js-sha1');
const FormData = require('form-data');

const cypherService = require('./cypherService');

const token = process.env.TOKEN;

const requestURL = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}`;
const submissionURL = `https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=${token}`

const getMain = (req, res) => {
	res.send({
		apiName: "cipher-caesar",
		creator: "Vinicius Menezes",
		dateCreated: new Date("2020-05-02T19:00:00Z")
	});
};

const decrypt = async (req ,res) => {
	const response = await axios.get(requestURL);

	const text = cypherService.caesarDecrypt(response.data.cifrado, response.data.numero_casas);
	const resumoSha1 = sha1(text);

	response.data.decifrado = text;
	response.data.resumo_criptografico = resumoSha1;

	fs.writeFileSync('answer.json', JSON.stringify(response.data));

	const formData = new FormData();
	formData.append('answer', fs.createReadStream('./answer.json'));
	const submissionResponse = await axios.post(submissionURL, formData, {
		headers: formData.getHeaders()
	});

	res.send(submissionResponse.data);
}
  
module.exports = {
	getMain,
	decrypt
}