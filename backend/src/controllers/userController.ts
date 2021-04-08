import {Request, Response} from 'express'
const users = [
    {name:'Lucas'},
    {name:'Eduarda'}
]

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    }
};