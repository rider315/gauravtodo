import express, { Router, request, response } from 'express';


const route = express.Router();
import { addTodo,getAllTodos,toggleTodoDone,updateTodo,deleteTodo } from '../controller/todo-controller.js';


// route.post('/tools',(request,response)=>{
//     console.log(request.body);
// })

route.post('/todos', addTodo)
route.get('/todos', getAllTodos);
route.get('/todos/:id',toggleTodoDone);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);


export default route;