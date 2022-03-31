const { Client } = require("pg");

require("dotenv").config();

const { DATABASE_NAME, DATABASE_USER, DATABASE_PASS } = process.env;

const dbClient = async () => {
  try {
    const client = new Client({
      user: DATABASE_USER,
      host: "localhost",
      database: DATABASE_NAME,
      password: DATABASE_PASS,
      port: 5432,
    });
    await client.connect();
    return client;
  } catch (e) {
    console.log("Failed to connect to db" . e.toString());
    return false;
  }
};

module.exports = dbClient;
