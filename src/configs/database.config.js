const { Client } = require('pg');

const client = new Client({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: Number(process.env.DATABASE_PORT),
});

const connectDb = async () => {
    try {
        await client.connect();
        console.log("Database connect!")
    } catch (error) {
        console.log(error);
        console.log("Database not connect!")
    }
}

module.exports = {
    client,
    connectDb
}
