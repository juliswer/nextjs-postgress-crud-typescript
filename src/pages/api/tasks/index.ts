import {NextApiRequest, NextApiResponse} from 'next'
import {conn} from '../../../utils/database'

export default async function tasks(req: NextApiRequest, res: NextApiResponse) {

    const {method, body} = req;

    switch (method) {
        case 'GET':
            return res.json('getting tasks')
        case 'POST':
            /* const {title, description} = body;
            await conn.query('INSERT INTO tasks (title, description) VALUES ($1, $2)', [title, description]);
            break; */
            const {title, description} = body;
            console.log(title)

            const query = "INSERT INTO tasks(title, description) VALUES ($1, $2) RETURNING *";
            const values = [title, description];

            const response = await conn.query(query, values);

            return res.status(200).json(response.rows[0]);
        case 'DELETE':
            return res.status(200).json('Deleting a task')
        case 'PUT':
            return res.status(200).json('Updating a task')
        default:
            res.status(400).json('Method not allowed')
            break;
    }
}