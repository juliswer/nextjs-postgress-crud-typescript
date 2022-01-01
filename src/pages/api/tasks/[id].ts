import { NextApiRequest, NextApiResponse } from "next";
import {conn} from '../../../utils/database'

export default async function tasks(req: NextApiRequest, res: NextApiResponse) {
    
    const {method} = req;
    const {id} = req.query;

    switch (method) {
        case 'GET':
            await conn.query('SELECT * FROM tasks WHERE id = $1', [id])
        case 'PUT':
            return res.status(200).json(`Updating task ${id}`)
        case 'DELETE':
            return res.status(200).json(`Deleting task ${id}`)
        default:
            res.status(400).json('Method not allowed')
            break;
    }
}