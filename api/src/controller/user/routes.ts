import { Router } from 'express';
import UserController from './Controller';
import config from '../user/validation';
import validationHandler from '../../middleware/validationHandler';
import authMiddleware from '../../middleware/authMiddleware';

const userRoutes = Router();

userRoutes.get('/find/:id', authMiddleware(), UserController.get);
userRoutes.get('/getall', authMiddleware(), UserController.getAll);
userRoutes.post('/create-user', UserController.create);
userRoutes.post('/login', UserController.login);
userRoutes.put('/bug-report', UserController.feedback);

export default userRoutes;
