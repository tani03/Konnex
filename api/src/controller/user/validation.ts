const config = {
	get: {
		id: {
			required: false,
			in: ['params'],
			errorMessage: 'Id not found',
		},
	},
	create: {
		name: {
			required: true,
			string: true,
			in: ['body'],
			errorMessage: 'Firstname is required',
		},
		email: {
			id: {
				required: true,
				regex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
				in: ['body'],
				errorMessage: 'Email is required',
			},
			verified: {
				required: false,
				boolean: true,
				default: false,
			},
		},
		password: {
			required: true,
			string: true,
			in: ['body'],
			errorMessage: 'Password is required',
		},
	},
	login: {
		email: {
			required: true,
			string: true,
			in: ["body"],
			errorMessage: 'Email is required',
		},
		password: {
			required: true,
			string: true,
			in: ["body"],
			errorMessage: 'Password is required',
		},
	},
};
export default config;
