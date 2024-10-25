import jwt from 'jsonwebtoken';

const auth = (req,res,next)=>{
    const token =req.header('authorization');

    if(!token){
       return res.status(401).send({error : 'No token provided..'});
    }

    try {
        const data = token.split(" ")[1];
        console.log(data);
        
        const decode= jwt.verify(data,'master');

        if(!decode){
            res.status(401).send({error : 'enter the valid token'});
        }
        else{
            console.log('done',decode);
            
        }

        if (role.includes(decode.role)) {
            next();
        } 
    }
    catch(err){
        res.status(401).send({error : 'Authenticate first..'});
    }
}

export default  auth;