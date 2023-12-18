import express from 'express'
import controller from '../controllers/auth'
const router = express.Router();

// Registration route
router.post('/register', controller.registerUser);

// Signin route
router.post('/login', controller.signInUser);

export = router;