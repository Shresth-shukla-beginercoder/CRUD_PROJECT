import { pool } from './db/pool.js';

async function main() {
  try {
    const result = await pool.query(
      `SELECT
         NOW() AS server_time,
         current_database() AS database_name,
         current_user AS user_name`
    );

    console.log('PostgreSQL connection OK:', result.rows[0]);
  } catch (error) {
    console.error('PostgreSQL connection failed:', error.message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

main();