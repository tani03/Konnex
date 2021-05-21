import VersionableSchema from '../versionable/VersionableSchema';

class UserSchema extends VersionableSchema {
	constructor(collection) {
		const baseSchema = Object.assign({
			_id: String,
			name: String,
			email: String,
			password: String,
			bugReport: String,
		});
		super(baseSchema, collection);
	}
}
export default UserSchema;
