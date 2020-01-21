import express from 'express';
import os from 'os';

const router = express.Router();

router.get('/getUsername', (req, res) => res.send({ user: os.userInfo() }));

export default router;
