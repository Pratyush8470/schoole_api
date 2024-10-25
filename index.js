import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes.js';
import db from './config/db.js';

const app = express();
const Port = 3005;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/',routes);

app.listen(Port,(err)=>{
    if (err) {
        console.log(`server running on http://localhost:${Port}`);
        
    }
})