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

                if(result.rows.length === 0) {
                    return res.status(404).json({error: 'Task not found'})
                }
                return res.json(result.rows[0]);
            } catch (error) {
                return res.status(400).json(error);
            }
        case 'PUT':
            try {
                const {title, description} = req.body
                const text = 'UPDATE tasks SET title = $1, description = $2 WHERE id = $3'
                const values = [title, description, query.id];
                const result = await conn.query(text, values);
                if(result.rows.length === 0) {
                    return res.status(404).json({error: 'Task not found'})
                }
                return res.json(result.rows[0]);
            } catch (error) {
                return res.status(400).json(error);
            }
        case 'DELETE':
            try {
                const text = 'DELETE FROM tasks WHERE id = $1'
                const values = [query.id];
                const result = await conn.query(text, values);
                if(result.rowCount === 0) {
                    return res.status(404).json({error: 'Task not found'})
                }                
                return res.json(result.rows[0])
            } catch (error) {
                return res.status(400).json(error);
            }
        default:
            res.status(400).json('Method not allowed')
            break;
    }
}