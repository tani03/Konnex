import { Request, Response, NextFunction, response } from 'express';
import UserRepository from '../../repositories/user/UserRepositories';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import userRoutes from './routes';

class UserController {
	userRepository: UserRepository = new UserRepository();
	static instance: UserController;

	static getInstance() {
		if (UserController.instance) {
			return UserController.instance;
		}
		UserController.instance = new UserController();
		return UserController.instance;
	}

	public async get(req: Request, res: Response, next: NextFunction) {
		console.log('Inside UserController get method');
		const user = new UserRepository();
		const { id } = req.params;
		await user
			.getUser(id)
			.then((data) => {
				if (data === null) {
					throw undefined;
				}
				console.log(data);
				res.status(200).send({
					message: 'User Fetched successfully',
					data,
					code: 200,
				});
				console.log('User fetched successfully');
			})
			.catch((err) => {
				console.log(err);
				res.send({
					error: 'User not found',
					code: 500,
				});
				console.log('User not found');
			});
	}
	public async getAll(req: Request, res: Response, next: NextFunction) {
		console.log('Inside UserController getall method');
		const user = new UserRepository();
		await user
			.getAll()
			.then((data) => {
				if (data === null) {
					throw undefined;
				}
				res.status(200).send({
					message: 'All Users Fetched successfully',
					data,
					code: 200,
				});
				console.log('All User fetched successfully');
			})
			.catch((err) => {
				console.log(err);
				res.send({
					error: 'No Users found',
					code: 500,
				});
				console.log('No users found');
			});
	}
	public async create(req: Request, res: Response, next: NextFunction) {
		console.log('Inside UserController create method');
		const {
			name,
			email,
			password,
			bugReport
		} = req.body;
		const user = new UserRepository();
		const hash = bcrypt.hashSync(password, 10);
		await user
			.createUser(
				{
					name,
					email,
					password: hash,
					bugReport
				},
				'admin'
			)
			.then(() => {
				res.status(200).send({
					message: 'User Created Successfully!',
					data: {
						name,
						email,
						password: hash,
					},
				});
				console.log('User created successfully');
			});
	}
	public async login(req: Request, res: Response, next: NextFunction) {
		console.log("Inside UserController login method");
		console.log(req.body.password);
		const { email } = req.body;
		console.log(email);
		const user = new UserRepository();

		const userData = await user.getUser({email});
		console.log("User data ", userData);
		if (userData) {
			const { password } = userData;
			console.log(password);
			bcrypt.compare(req.body.password, password, (err, result) => {
				if (err) {
					throw err;
				} else if (result) {
					const token = jwt.sign(
						userData.toJSON(),
						process.env.TOKEN_SECRET,
						{ expiresIn: "15m" }
					);

					res.send({
						message: "Login Successfull",
						status: 200,
						token: token
					});
				} else {
					res.send({
						message: "Incorrect password",
						code: 403
					});
				}
			});
		} else {
			res.send({
				message: "Incorrect Email",
				code: 403
			});
		}
	}
	public async feedback(req: Request, res: Response, next: NextFunction) {
		console.log('Inside feedback method');
		const { id, dataToUpdate } = req.body;
		if(dataToUpdate && id) {
			const user = new UserRepository();
			await user.feedback(id, dataToUpdate, undefined);
		} else {
			res.send({
				message: "Please fill all fields"
			});
		}
		res.send({
			message: 'Report posted',
			code: 200
		});
	}
}

export default new UserController();
