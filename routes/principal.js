import express from 'express';
import auth from '../config/auth.js';
import principal from '../controller/principal.js';
const principalroute = express.Router();

principalroute.get('/',principal);

export default principalroute;