import {NextApiRequest, NextApiResponse} from 'next'

export default function tasks(req: NextApiRequest, res: NextApiResponse) {

    const {method} = req;

    switch (method) {
        case 'GET':
            return res.status(200).json('Getting tasks')
        case 'POST':
            return res.status(200).json('Posting a task')
        case 'DELETE':
            return res.status(200).json('Deleting a task')
        case 'PUT':
            return res.status(200).json('Updating a task')
        default:
            res.status(400).json('Method not allowed')
            break;
    }
}