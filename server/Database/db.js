import pg from "pg";
const { Client } = pg;

const client = new Client({
  user: "postgres",
  password: "benz1992",
  host: "localhost",
  port: 5432,
  database: "auth",
});

export default client;
