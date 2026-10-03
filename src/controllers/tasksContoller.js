import {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    toggleTaskComplete
} from "../models/taskmodel.js";

export async function showTasks(req, res) {
    try {
        const status = req.query.status || "all";
        const search = req.query.q || "";

        const tasks = await getAllTasks(status, search);

        res.render("tasks/index", {
            tasks,
            status,
            search
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
}


export async function showEditForm(req, res) {
    try {
        const { id } = req.params;

        const task = await getTaskById(id);

        if (!task) {
            return res.status(404).send("Task not found");
        }

        res.render("tasks/edit", { task });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
}


export async function addTask(req, res) {
    try {
        const { title, description } = req.body;

        const trimmedTitle = (title || "").trim();

        if (trimmedTitle === "") {
            return res.status(400).send("Task title cannot be blank.");
        }

        await createTask(trimmedTitle, description);

        res.redirect("/tasks");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
}

export function shownewtaskform(req,res){
    res.render("tasks/new")
}

export function showHome(req,res){
    res.render("tasks/home")
}

export async function editTask(req, res) {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const trimmedTitle = (title || "").trim();

        if (trimmedTitle === "") {
            return res.status(400).send("Task title cannot be blank.");
        }

        const task = await updateTask(id, trimmedTitle, description);

        if (!task) {
            return res.status(404).send("Task not found");
        }

        res.redirect("/tasks");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
}


export async function removeTask(req, res) {
    try {
        const { id } = req.params;

        const deletedTask = await deleteTask(id);

        if (!deletedTask) {
            return res.status(404).send("Task not found");
        }

        res.redirect("/tasks");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
}

export async function toggleComplete(req, res) {
    try {
        const { id } = req.params;

        const task = await toggleTaskComplete(id);

        if (!task) {
            return res.status(404).send("Task not found");
        }

        res.redirect("/tasks");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
}