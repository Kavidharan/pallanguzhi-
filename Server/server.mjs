import express from 'express';
import env from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
env.config();
const App = express();
App.use(cors());
const PORT = process.env.PORT || 5000; // Use 5000 as a fallback port
const HOST = process.env.HOST || 'localhost';

const users =[{user_name : "lskp",password : '123'},{user_name : "kavi",password : "123"}];

App.use(express.json());

//mongoose.connect('mongodb+srv://kavidharan496:Lskp1kavi*@cluster0.vgphhpu.mongodb.net/pallanguli')
//.then(res => console.log('db is connectot'))
//.catch(err => console.log(err))


App.get('/api',(req,res)=>{
    res.send({mes:"server is connected"})
});

App.get('/api/login',(req,res)=>{
    //const user = users.find((user) => user.user_name == req.body.username);
    res.send({mes:"user is not found"});
});

App.listen(PORT,HOST,() =>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
});