import * as mongoose from 'mongoose';
import { UserModel } from './UserModel';
import IUser from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';

export default class UserRepository extends VersionableRepository<
	IUser,
	mongoose.Model<IUser>
> {
	constructor() {
		super(UserModel);
	}

	public createUser(data, creator) {
		return super.createUser(data, creator);
	}

	public getUser(data) {
		return super.getUser(data);
	}

	public getAll() {
		return super.getAll();
	}

	public findOne(data) {
		return super.findOne(data);
	}
}
