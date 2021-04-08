import {Router} from 'express';
import UserController from './controllers/userController'

const routes = Router();


routes.get('/', (req,res) =>{
    return res.send('A');
});

routes.get('/users', UserController.index);

export default routes;