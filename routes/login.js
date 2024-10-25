import express from 'express';
import {logincon} from '../controller/logincon.js';
const loginroute = express.Router();

loginroute.post('/',logincon);

export default loginroute;