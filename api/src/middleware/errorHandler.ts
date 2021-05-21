import { Request, Response, NextFunction } from 'express';
export default (err: any, req: Request, res: Response, next: NextFunction) => {
	console.log('Error is:', err);
	res.json({
		error: err.error,
		status: err.code || 404,
		message: err.message || 'Error occured',
		timestamp: new Date(),
	});
};
