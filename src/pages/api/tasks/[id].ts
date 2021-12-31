import { NextApiRequest, NextApiResponse } from "next";

export default function tasks(req: NextApiRequest, res: NextApiResponse) {
    
    const {method} = req;
    const {id} = req.query;

    switch (method) {
        case 'GET':
            return res.status(200).json(`Getting task ${id}`)
        case 'PUT':
            return res.status(200).json(`Updating task ${id}`)
        case 'DELETE':
            return res.status(200).json(`Deleting task ${id}`)
        default:
            res.status(400).json('Method not allowed')
            break;
    }
}