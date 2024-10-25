import principalmodel from '../model/login.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const principal = async (req, res) => {
    res.status(200).json({"msg":"principal"});
}


export default principal;