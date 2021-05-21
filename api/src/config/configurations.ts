import * as dotenv from 'dotenv';
import { IConfig } from './IConfig';

dotenv.config();

export const configurations: IConfig = Object.freeze({
	PORT: process.env.PORT || 8000,
	NODE_ENV: process.env.NODE_ENV || 'local',
	MONGO_URL:
		process.env.MONGO_URL || 'mongodb://localhost:27017/konnex',
	TOKEN_SECRET:
		process.env.TOKEN_SECRET || "qwertyuiopasdfghjklzxcvbnm123456",
});
