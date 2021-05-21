import * as express from 'express';
import { IConfig } from './config/IConfig';
import * as bodyparser from 'body-parser';
import errorHandler from './middleware/errorHandler';
import notFoundRoutes from './libs/routes/notFoundRoutes';
import Database from './libs/Database';
import router from './router';

class Server {
	private application: express.Express;
	constructor(private config: IConfig) {
		this.application = express();
	}

	public bootstrap() {
		this.initBodyParser();
		this.setupRoutes();
		return this;
	}

	public setupRoutes() {
		console.log('Inside Setup Routes Method');
		this.application.use('/', router);
		this.application.use(notFoundRoutes);
		this.application.use(errorHandler);
	}

	public initBodyParser() {
		this.application.use(bodyparser.urlencoded({ extended: false }));
		this.application.use(bodyparser.json());
	}

	public run() {
		console.log('Inside run module');
		let runningServer;
		Database.connect(this.config.MONGO_URL).then(() => {
			runningServer = this.application.listen(this.config.PORT);
			runningServer.on('listening', () => {
				const ann = `|| App is runnning at PORT '${this.config.PORT}' IN '${this.config.NODE_ENV}' Environment`;
				console.info(ann.replace(/[^]/g, '-'));
				console.info(ann);
				console.info(ann.replace(/[^]/g, '-'));
				console.info('Press CTRL-C to stop\n');
			});

			runningServer.on('error', (err: any) => {
				console.debug(':::::: GOT ERROR IN STARTING SERVER ::::::');
				console.error(err);
			});
		});
	}
}

export default Server;
