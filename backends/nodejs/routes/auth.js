import express from 'express';

import { register, login, getMe } from '../controllers/auth.js'

const router = express.Router();

router.post('/register', register);

router.post('/logn', login);

router.get('/me', getMe);

export default router;
