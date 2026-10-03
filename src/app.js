import express from "express";
import { showHome } from "./controllers/tasksContoller.js";
import tasksRoutes from "./routes/taskRoutes.js";

const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", showHome);

app.use("/tasks", tasksRoutes);

app.listen(3000, () => {
    console.log("The app is listening at http://localhost:3000/");
});