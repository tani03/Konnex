import { Request, Response, NextFunction } from 'express';

export default (config) => (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let inputData;
	const errors = [];
	let index = 0;
	console.log('Inside validation Handler');
	for (const prop in config) {
		if (config.hasOwnProperty(prop)) {
			inputData = req[config[prop].in[0]];
			console.log(config[prop].in);
			console.log('prop', prop);
			console.log('Input data values ', inputData[prop]);

			const property = config[prop];
			console.log('property: ', property);
			if (property.required) {
				if (!inputData[prop]) {
					console.log(
						'not included property',
						prop,
						!inputData[prop]
					);
					errors[index++] = {
						key: prop,
						location: config[prop].in,
						errorMessage:
							property.errorMessage || 'Property not found',
					};
					continue;
				}
			}

			if (
				config[prop].in[0] === 'params' ||
				config[prop].in[0] === 'query' ||
				property.number !== undefined
			)
				inputData[prop] = parseInt(inputData[prop], 10);

			if (inputData[prop] === '' && property.default !== undefined)
				inputData[prop] = property.default;

			console.log(typeof inputData[prop]);

			if (!property[typeof inputData[prop]]) {
				if (
					!(
						typeof inputData[prop] === 'object' &&
						property.isObject !== undefined
					)
				) {
					if (
						property.number !== undefined ||
						property.string !== undefined
					) {
						console.log(
							'incorrect input type',
							prop,
							typeof inputData[prop]
						);
						errors[index++] = {
							key: prop,
							location: config[prop].in,
							errorMessage:
								property.errorMessage || 'Incorrect input type',
						};
					}
				} else if (
					property.number !== undefined ||
					property.string !== undefined
				) {
					console.log(
						'incorrect input type',
						prop,
						typeof inputData[prop]
					);
					errors[index++] = {
						key: prop,
						location: config[prop].in,
						errorMessage:
							property.errorMessage || 'Incorrect input type',
					};
				}
			}

			if (property.custom !== undefined) {
				property.custom(inputData[prop]);
			}
		}
	}
	errors.length > 0 ? next(errors) : next();
};
