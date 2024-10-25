import loginmodel from '../model/login.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const login = async (req, res) => {
    const user = await loginmodel.find({ email: req.body.email });
    if (user.length > 0) {
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if(result){
                let token = jwt.sign({userName:user.name,role:user.role}, 'master', { expiresIn: '2h' });
                res.json({msg:"login successfull",token:token});
            }else{
                res.json({msg:"pasword incorrect"});
            }
        });
    }else{
        res.json({msg:"email not found"});
    }
}