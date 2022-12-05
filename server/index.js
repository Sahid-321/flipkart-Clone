import express from 'express';
const app = express();
const PORT = 8000;
import Connection from './database/db.js';

Connection();

app.listen(PORT, ()=>{
    console.log(`server runnig at port ${PORT} hello`);
}
)