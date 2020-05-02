const cypherService = require('./cypherService');
const axios = require('axios');
const token = process.env.TOKEN;

const requestURL = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=${token}`;

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
	console.log(text);
	
	res.send(response.data);
}
  
module.exports = {
	getMain,
	decrypt
}