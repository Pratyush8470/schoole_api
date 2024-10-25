import express from 'express';
import signup from '../controller/signupcon.js';
const signuproute = express.Router();

signuproute.post('/',signup);

export default signuproute;