import pool from "../db/pool.js";

export async function getAllTasks(status = "all", search = "") {
    // READ: Fetch all tasks, optionally filtering by completion status and title.
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
    // READ: Fetch one task using its ID.
    const result = await pool.query(
        `SELECT *
         FROM tasks
         WHERE id = $1`,
        [id]
    );

    return result.rows[0];
}

export async function createTask(title, description) {
    // CREATE: Insert a new task and return the created record.
    const result = await pool.query(
        `INSERT INTO tasks (title, description)
         VALUES ($1, $2)
         RETURNING *`,
        [title, description]
    );

    return result.rows[0];
}

export async function updateTask(id, title, description) {
    // UPDATE: Change a task's title and description, then return the updated record.
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
    // DELETE: Remove a task by ID and return the deleted task's ID.
    const result = await pool.query(
        `DELETE FROM tasks
         WHERE id = $1
         RETURNING id`,
        [id]
    );

    return result.rows[0];
}

export async function toggleTaskComplete(id) {
    // UPDATE: Toggle a task's completion status and return the updated record.
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