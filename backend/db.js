const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "taskdb",
  password: "ASDFGHJKL;'",
  port: 5432,
});

module.exports = pool;
