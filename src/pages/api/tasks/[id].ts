import { NextApiRequest, NextApiResponse } from "next";
import {conn} from '../../../utils/database'

export default async function tasks(req: NextApiRequest, res: NextApiResponse) {
    
    const {method, query} = req;

    switch (method) {
        case 'GET':
            try {
                const text = 'SELECT * FROM tasks WHERE id = $1'
                const values = [query.id];
                const result = await conn.query(text, values);
                return res.json(result.rows[0]);
            } catch (error) {
                return res.status(400).json(error);
            }
        case 'PUT':
            return res.status(200).json(`Updating task ${query.id}`)
        case 'DELETE':
            try {
                const text = 'DELETE FROM tasks WHERE id = $1'
                const values = [query.id];
                const result = await conn.query(text, values);
                return res.json(result)
            } catch (error) {
                return res.status(400).json(error);
            }
        default:
            res.status(400).json('Method not allowed')
            break;
    }
}