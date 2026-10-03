import pool from "../db/pool.js";

export async function getAllTasks(status = "all", search = "") {
    let query = `
        SELECT *
        FROM tasks
        WHERE 1 = 1
    `;

    const values = [];

    if (status === "pending") {
        values.push(false);
        query += ` AND is_complete = $${values.length}`;
    } else if (status === "complete") {
        values.push(true);
        query += ` AND is_complete = $${values.length}`;
    }

    if (search !== "") {
        values.push(`%${search}%`);
        query += ` AND title LIKE $${values.length}`;
    }

    query += ` ORDER BY created_at DESC`;

    const result = await pool.query(query, values);

    return result.rows;
}

export async function getTaskById(id) {
    const result = await pool.query(
        `SELECT *
         FROM tasks
         WHERE id = $1`,
        [id]
    );

    return result.rows[0];
}

export async function createTask(title, description) {
    const result = await pool.query(
        `INSERT INTO tasks (title, description)
         VALUES ($1, $2)
         RETURNING *`,
        [title, description]
    );

    return result.rows[0];
}

export async function updateTask(id, title, description) {
    const result = await pool.query(
        `UPDATE tasks
         SET title = $1,
             description = $2,
             updated_at = CURRENT_TIMESTAMP
         WHERE id = $3
         RETURNING *`,
        [title, description, id]
    );

    return result.rows[0];
}

export async function deleteTask(id) {
    const result = await pool.query(
        `DELETE FROM tasks
         WHERE id = $1
         RETURNING id`,
        [id]
    );

    return result.rows[0];
}

export async function toggleTaskComplete(id) {
    const result = await pool.query(
        `UPDATE tasks
         SET is_complete = NOT is_complete,
             updated_at = CURRENT_TIMESTAMP
         WHERE id = $1
         RETURNING *`,
        [id]
    );

    return result.rows[0];
}