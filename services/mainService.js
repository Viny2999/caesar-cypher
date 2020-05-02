const getMain = (req, res) => {
	res.send({
		apiName: "cipher-caesar",
		creator: "Vinicius Menezes",
		dateCreated: new Date("2020-05-02T19:00:00Z")
	});
};
  
exports.getMain = getMain;