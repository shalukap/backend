import express from 'express';
import {getAllStudents,postStudent,deleteStudent,updateStudent} from '../controllers/studentController.js';

let studentRouter=express.Router();

studentRouter.get('/',getAllStudents)
studentRouter.post('/',postStudent)
studentRouter.delete('/:sid',deleteStudent)
studentRouter.put('/:sid',updateStudent)

export default studentRouter