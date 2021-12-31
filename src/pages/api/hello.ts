import {NextApiRequest, NextApiResponse} from 'next';

export default function index(req: NextApiRequest, res: NextApiResponse) {
  res.json('Hello World!');
};