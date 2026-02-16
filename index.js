import Http from 'http';
import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const pg = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSL === 'true'
      ? { rejectUnauthorized: false }
      : false,
  },
});

const PORT = 3000;

async function handler(request, response) {
    const users = await pg('users').select('*');
    console.log(users);
    return response.end('OK');
}

const server = Http.createServer(handler);

server.listen(PORT);
