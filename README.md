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


## Section B: Explain Your Thinking (~15 minutes)

1. Why did you choose this project structure?
=> To ensure a clear division of responsibilities, I organized the project using distinct frontend/ and backend/ folders. This enables the frontend and backend to be developed, tested, and deployed independently, simulating the deployment and maintenance of real-world full-stack apps. Every component has a unique package.dependencies and json, which prevents conflicts and maintains modularity.

2. How did you separate frontend and backend concerns?
=> Rendering the user interface, using React hooks to manage state, and using fetch to make API calls to the backend are all handled by the frontend. It has no idea how the data is handled or stored in the background.
Express.js is used by the backend to expose a REST API. It manages business logic, routing, and all database interactions. In addition to serving other clients, such as mobile apps or other services, this guarantees that the backend is completely separated from the user interface.

3. How would you handle errors and edge cases?
=> On the backend: Put try...catch blocks around all of the database queries.
Send error messages that are always the same and make sense (for example, 400 for bad requests and 500 for server errors).
Use libraries like Joi or express-validator to check inputs and make sure that bad data doesn't get into the database.

On the front end: When something goes wrong, show the user-friendly error message "Failed to add task."
Take care of empty states (like when there are no tasks).
To stop duplicates, turn off the submit button while the task is being added.

4. What security features would you add in production?
=> If deploying to production, I’d include:
Input validation and sanitization to prevent SQL injection and XSS.
Rate limiting to avoid abuse of public APIs.
CORS restrictions to only allow known origins.
Authentication and authorization, possibly using JWT or sessions, especially if user-specific task lists are added.
Environment variables for secrets and credentials (already avoided .env in version control via .gitignore).

5. What would you improve if you had 1 full day?
=> In one full day, I would: Add the ability to edit tasks.
Add filters to show task status (e.g., pending or completed).
Make it possible to sort by dragging and dropping.
Use Jest for the front end and supertest for the back end to add unit tests.
Set up Docker so that you can develop on your own computer in a consistent way.
Use Render for the backend and Vercel for the frontend. Then, use a .env file to connect the two for production URLs.
Use Tailwind to add animations and transitions to improve the UI/UX.

