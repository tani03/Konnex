import * as mongooge from "mongoose";

export default class VersionableSchema extends mongooge.Schema {
	constructor(options: any, collections: any) {
		const versionedOptions = Object.assign(
			{
				createdAt: {
					default: Date.now,
					required: true,
					type: Date,
				},

				deletedAt: {
					type: Date,
				},

				originalId: {
					required: false,
					default: undefined,
					type: String,
				},

				updatedAt: {
					required: false,
					default: undefined,
					type: Date,
				},

				updatedBy: {
					required: false,
					default: undefined,
					type: String,
				},

				createdBy: {
					required: false,
					default: undefined,
					type: String,
				},

				deletedBy: {
					required: false,
					default: undefined,
					type: String,
				},
			},
			options
		);

		super(versionedOptions, collections);
	}
}
