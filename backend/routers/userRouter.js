import express from 'express';
import data from '../data.js';
import expressAsynHandler from 'express-async-handler';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get('/seed', expressAsynHandler(async(req, res) =>{
    await User.remove({}); 
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});
}));

export default userRouter;