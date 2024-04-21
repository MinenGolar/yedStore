import express from 'express';
import connectdb from './utils/db.js';
import dotenv from "dotenv";
import addUser from './controllers/userController.js';

dotenv.config();
const app = express();
const port = 3000
connectdb()

app.get('/', addUser)

app.get('/login', (req, res) => {
    res.send('login')
    });
    

app.post('/register', (req, res) => {
const {fullname, email, phoneNumber, password} = req.body
});
app.listen (3000,()=>{
console.log('Example app listening on port 3000');
})
