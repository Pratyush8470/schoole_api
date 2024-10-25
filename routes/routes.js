import express from 'express';
import login from './login.js';
import signup from './sigup.js';
import principal from './principal.js';

const routes = express.Router();

routes.use('/login',login);
routes.use('/signup',signup);
routes.use('/principal',principal);

export default routes;