import * as mongoose from 'mongoose';

export default class VersionableSchema extends mongoose.Schema {
	constructor(options: any, collections: any) {
		const versionedOptions = Object.assign(
			{
				createdAt: {
					default: Date.now,
					required: true,
					type: Date,
				},

				originalId: {
					required: true,
					default: undefined,
					type: String,
				},

				updatedAt: {
					required: false,
					default: undefined,
					type: String,
				},

				createdBy: {
					required: true,
					default: undefined,
					type: String,
				},
			},
			options
		);
		super(versionedOptions, collections);
	}
}
