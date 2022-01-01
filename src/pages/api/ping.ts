import {NextApiRequest, NextApiResponse} from 'next';
import {conn} from '../../utils/database';
require("dotenv").config();

export default async function index(req: NextApiRequest, res: NextApiResponse) {

  const response = await conn.query('SELECT NOW()')

  

  res.json({message: 'pong', time: response.rows[0].now});
};