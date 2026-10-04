Task Manager — Full-Stack CRUD Application

A full-stack Task Manager web application built with Node.js, Express.js, EJS, and PostgreSQL.

The application allows users to create, view, update, delete, search, and manage tasks. The project uses PostgreSQL for local development and Neon PostgreSQL as the production database, with the application deployed on Vercel.

🚀 Live Demo

Live Application:
"Task Manager — Live Demo" (https://crud-project-chi-wine.vercel.app/?utm_source=chatgpt.com)

📌 Features

- Create new tasks
- View all tasks
- View individual task details
- Edit existing tasks
- Delete tasks
- Mark tasks as complete
- Search tasks by title
- Filter tasks by completion status
- Server-side form handling
- PostgreSQL database integration
- Environment-variable based database configuration
- Responsive frontend
- Production deployment with Vercel
- Production database hosted on Neon

🛠️ Tech Stack

Backend

- Node.js
- Express.js
- PostgreSQL
- "pg" PostgreSQL client

Frontend

- EJS
- HTML
- CSS
- JavaScript

Database

- PostgreSQL for local development
- Neon PostgreSQL for production

Deployment & Tools

- Git
- GitHub
- Vercel
- Neon
- pgAdmin

📂 Project Structure

CRUD_PROJECT/
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── src/
│   ├── controllers/
│   │   └── tasksContoller.js
│   │
│   ├── db/
│   │   └── pool.js
│   │
│   ├── models/
│   │   └── taskmodel.js
│   │
│   ├── routes/
│   │   └── taskRoutes.js
│   │
│   ├── app.js
│   └── test-db.js
│
├── views/
│   └── tasks/
│       ├── edit.ejs
│       ├── home.ejs
│       ├── index.ejs
│       └── new.ejs
│
├── .gitignore
├── package.json
├── package-lock.json
└── vercel.json

🗄️ Database

The application uses a PostgreSQL database with a "tasks" table.

The table contains:

Column| Type| Description
"id"| SERIAL| Unique task ID
"title"| VARCHAR(120)| Task title
"description"| TEXT| Task description
"is_complete"| BOOLEAN| Task completion status
"created_at"| TIMESTAMP| Task creation time
"updated_at"| TIMESTAMPTZ| Last update time

🔐 Environment Variables

The application uses environment variables to keep database credentials outside the source code.

For local development, create a ".env" file in the project root:

DB_HOST=localhost
DB_PORT=5432
DB_NAME=task_manager
DB_USER=your_postgresql_user
DB_PASSWORD=your_postgresql_password

For production, the application uses:

DATABASE_URL=your_neon_pooled_connection_string

Never commit your ".env" file or database credentials to GitHub.

💻 Local Setup

1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_URL

2. Open the project

cd CRUD_PROJECT

3. Install dependencies

npm install

4. Configure PostgreSQL

Make sure PostgreSQL is installed and running locally.

Create a PostgreSQL database named:

task_manager

Then create the "tasks" table using the required SQL schema.

5. Create ".env"

Create a ".env" file in the project root and add your local PostgreSQL credentials:

DB_HOST=localhost
DB_PORT=5432
DB_NAME=task_manager
DB_USER=your_postgresql_user
DB_PASSWORD=your_postgresql_password

6. Start the application

npm start

The application will run locally at:

http://localhost:3000

🔄 Application Flow

The basic request flow is:

Browser
   ↓
Express Route
   ↓
Controller
   ↓
Model
   ↓
PostgreSQL
   ↓
Model
   ↓
Controller
   ↓
EJS View
   ↓
Browser

For example, when creating a task:

User submits form
        ↓
POST /tasks
        ↓
Task Controller
        ↓
Task Model
        ↓
PostgreSQL INSERT query
        ↓
Database stores task
        ↓
Redirect to tasks page

🌐 Production Deployment

The application is deployed using Vercel.

Production architecture:

User
 ↓
Vercel
 ↓
Express + EJS Application
 ↓
Neon PostgreSQL

The production application uses the "DATABASE_URL" environment variable to connect to Neon PostgreSQL.

The Neon database is independent of the PostgreSQL database running on the local development machine.

🔒 Security

- Database credentials are stored in environment variables.
- ".env" is excluded from Git using ".gitignore".
- Production uses a Neon PostgreSQL connection string through "DATABASE_URL".
- Database credentials should never be committed to the repository.

📚 What I Learned

This project helped me practice:

- Building REST-style CRUD functionality with Express
- Working with PostgreSQL
- Writing SQL queries
- Connecting Node.js to PostgreSQL using "pg"
- Using EJS for server-side rendering
- Handling route parameters, request bodies, and query parameters
- Using controllers, models, and routes
- Working with environment variables
- Using Git and GitHub
- Deploying an Express application with Vercel
- Connecting a deployed application to Neon PostgreSQL
- Managing separate local and production databases

🔮 Future Improvements

Possible future improvements include:

- User authentication and authorization
- Task categories and priorities
- Due dates and reminders
- Pagination
- Better validation and error handling
- REST API endpoints
- User-specific task management
- Improved UI/UX
- Automated tests
- Database migrations

👨‍💻 Author

Shresth Shukla

Computer Science & Engineering — AI & ML

---

⭐ If you found this project useful, consider giving the repository a star.