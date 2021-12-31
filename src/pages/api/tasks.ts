import {NextApiRequest, NextApiResponse} from 'next'

export default function tasks(req: NextApiRequest, res: NextApiResponse) {

    const {method} = req;

    switch (method) {
        case 'GET':
            res.status(200).json('Getting tasks')
            break;
        case 'POST':
            res.status(200).json('Posting a task')
            break;
        case 'DELETE':
            res.status(200).json('Deleting a task')
            break;
        case 'PUT':
            res.status(200).json('Updating a task')
            break;
        default:
            res.status(400).json('Method not allowed')
            break;
    }
}