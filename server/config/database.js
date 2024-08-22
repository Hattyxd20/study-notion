const mongoose = require("mongoose");
require("dotenv").config();

const { DB_URL } = process.env;

exports.connect = () => {
	mongoose
		.connect(DB_URL, {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then((res) => {
           console.log('db connected')
		})
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
