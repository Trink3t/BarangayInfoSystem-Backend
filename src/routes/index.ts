import { Router } from 'express';

import barangaySecretaryRoutes from './barangay-secretaries.routes';
import authRoutes from './auth.routes';

const router = Router();

router.use('/barangay_secretaries', barangaySecretaryRoutes);
router.use('/auth', authRoutes);

export default router;