import * as mongoose from 'mongoose';
import UserSchema from './UserSchema';
import IUserModel from './IUserModel';

export const userSchema = new UserSchema({
	collection: 'user',
});

export const UserModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>(
	'user',
	userSchema
);
