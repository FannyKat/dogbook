import express from 'express';
import { testFunction } from '../controllers/test.controllers';
const router = express.Router();

router.get('/testRoute', testFunction);

export default router;