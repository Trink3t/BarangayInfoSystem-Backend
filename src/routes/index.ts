import { Router } from 'express';

import barangaySecretaryRoutes from './barangay-secretaries.routes';

const router = Router();

router.use('/barangay_secretaries', barangaySecretaryRoutes);

export default router;