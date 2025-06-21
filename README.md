# Mini Task Manager

This is a simple full-stack Task Manager application built using Next.js, Tailwind CSS, Express.js, and PostgreSQL. The goal of this project is to provide a minimal and functional app to manage tasks — with a clean UI and working backend.

## What It Does

- Add new tasks
- View a list of existing tasks
- Delete tasks when completed
- Responsive design using Tailwind CSS
- API communication with a PostgreSQL backend

It's a lightweight to-do application designed to demonstrate core full-stack development concepts.

## Tech Stack

- Frontend: Next.js (React), Tailwind CSS
- Backend: Express.js (Node.js)
- Database: PostgreSQL
- API: REST

## Getting Started

### 1. Clone the Repository

git clone https://github.com/pandeySAN/task_manager.git
cd task_manager

### 2. Set Up PostgreSQL

Make sure PostgreSQL is installed and running. Then create the database and table:
CREATE DATABASE taskdb;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

### 3. Set Up the Backend

Navigate to the backend directory:

cd backend
npm install
Update your database credentials in db.js:

const pool = new Pool({
  user: "your_postgres_username",
  host: "localhost",
  database: "taskdb",
  password: "your_password",
  port: 5432,
});
Start the backend server:

node index.js
Server will run at http://localhost:5000

### 4. Set Up the Frontend
Open a new terminal and navigate to the frontend directory:

cd frontend
npm install
npm run dev
Frontend will run at http://localhost:3000

API Endpoints
GET /tasks – Retrieve all tasks

POST /tasks – Add a new task

DELETE /tasks/:id – Delete a task by ID

Folder Structure
mini-task-manager/
├── backend/
│   ├── db.js
│   ├── index.js
│   └── routes/
│       └── tasks.js
├── frontend/
│   ├── components/
│   │   ├── TaskForm.js
│   │   └── TaskItem.js
│   ├── pages/
│   │   └── index.js
│   └── tailwind.config.js
Optional Ideas to Extend
Add edit task functionality

Add user authentication

Filter completed vs. pending tasks

Deploy backend (e.g., Render) and frontend (e.g., Vercel)

License
This project is open-source and free to use.

---

Let me know if you'd like to include your GitHub profile, a screenshot section, or deployment instructions for Render/Vercel.
