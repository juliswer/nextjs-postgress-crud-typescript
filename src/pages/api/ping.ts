import {NextApiRequest, NextApiResponse} from 'next';
import {conn} from '../../utils/database';
require("dotenv").config();

export default async function index(req: NextApiRequest, res: NextApiResponse) {

  const response = await conn.query('SELECT NOW()')

  console.log(response.rows[0].now)

  res.json({message: 'pong'});
};