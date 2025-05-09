import express from 'express';
import {loginUser, registerUser} from '../controllers/userController.js';

const userRouter=express.Router();

userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)

export default userRouter

    /*{
        "email":"shaluka@example.com",
        "password":"abc123"
    }

*/
/*aims@example.com abc1234 */