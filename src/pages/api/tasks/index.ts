import {NextApiRequest, NextApiResponse} from 'next'
import {conn} from '../../../utils/database'

export default async function tasks(req: NextApiRequest, res: NextApiResponse) {

    const {method, body} = req;

    switch (method) {
        case 'GET':
            try {
                const query = 'SELECT * FROM tasks'
                const response = await conn.query(query)

                console.log(response)

                return res.status(200).json(response.rows)
            } catch (error) {
                return res.status(400).json(error)
            }
        case 'POST':
            try {
                const {title, description} = body;
                console.log(title)

                const query = "INSERT INTO tasks(title, description) VALUES ($1, $2) RETURNING *";
                const values = [title, description];

                const response = await conn.query(query, values);

                return res.status(200).json(response.rows[0]);
            } catch (error) {
                return res.status(400).json(error)
            }
        case 'DELETE':
            return res.status(200).json('Deleting a task')
        case 'PUT':
            return res.status(200).json('Updating a task')
        default:
            res.status(400).json('Method not allowed')
            break;
    }
}