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

router.get("/", showTasks);

router.get("/new", shownewtaskform);

router.post("/", addTask);

router.get("/:id/edit", showEditForm);

router.post("/:id", editTask);

router.post("/:id/delete", removeTask);

router.post("/:id/toggle-complete", toggleComplete);

export default router;