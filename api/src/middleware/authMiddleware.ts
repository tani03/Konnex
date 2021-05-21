import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export default () => (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		console.log('Inside authmiddleware');
		const token = req.headers['authorization'];
		if (!token) {
			next({
				message: 'Token not found',
				error: 'Authentication failed',
				status: 403,
			});
		} else {
			console.log('Inside token');
			const user = jwt.verify(token, process.env.TOKEN_SECRET);
			console.log('Token verified');
		}
	} catch (error) {
		next({
			message: 'Unauthorized access',
			error: error.message || 'Unauthorized',
			code: 403,
		});
	}
};
