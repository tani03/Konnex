import userRoutes from './controller/user/routes';
import { Router } from 'express';

const router = Router();

router.get('/health-check', (req, res) => {
	res.send('Hello World');
});
router.use('/user', userRoutes);

export default router;
