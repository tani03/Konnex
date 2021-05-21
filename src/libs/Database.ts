import * as mongoose from 'mongoose';

class Database {
	static connect(mongoURL) {
		return new Promise((resolve, reject) => {
			console.log('Inside Database Connect method', mongoURL);
			mongoose.connect(
				mongoURL,
				{ useNewUrlParser: true, useUnifiedTopology: true },
				(err) => {
					if (err) {
						console.log(
							'GOT ERROR WHILE CONNECTING TO DATABASE',
							err
						);
						reject('Database connection ERROR!');
						return;
					}
					console.log('Database CONNECTED!');
					resolve('Connection Established');
				}
			);
		});
	}
	static disconnect() {
		console.log('Inside Database Disconnect Method');
		mongoose.disconnect((err) => {
			console.log('Error in disconnecting Database!', err);
			return;
		});
		console.log('Database successfully disconnected!');
	}
}
export default Database;
