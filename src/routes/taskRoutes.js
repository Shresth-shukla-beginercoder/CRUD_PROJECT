import express from "express";

import {
    showTasks,
    shownewtaskform,
    addTask,
    showEditForm,
    editTask,
    removeTask,
    toggleComplete
} from "../controllers/tasksContoller.js";

const router = express.Router();
// Define routes for task-related operations
router.get("/", showTasks);
// Route to display the form for creating a new task
router.get("/new", shownewtaskform);
//  Route to handle the submission of a new task
router.post("/", addTask);
// Route to display the form for editing an existing task
router.get("/:id/edit", showEditForm);
// Route to handle the submission of edits to an existing task
router.post("/:id", editTask);
//  Route to handle the deletion of a task
router.post("/:id/delete", removeTask);
// Route to handle toggling the completion status of a task
router.post("/:id/toggle-complete", toggleComplete);

export default router;