import { Router } from 'express';
import UserController from './Controller';
import config from '../user/validation';
import validationHandler from '../../middleware/validationHandler';
import authMiddleware from '../../middleware/authMiddleware';

const userRoutes = Router();

userRoutes.get('/find/:id', authMiddleware(), validationHandler(config.get), UserController.get);
userRoutes.get('/getall', authMiddleware(), UserController.getAll);
userRoutes.post('/create-user', validationHandler(config.create), UserController.create);
userRoutes.post('/login', validationHandler(config.login), UserController.login);

export default userRoutes;
