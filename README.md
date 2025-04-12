# Student Job Tracker Backend

This is the backend for the Student Job Tracker application, providing a REST API for managing job applications.

## Project Overview

The backend facilitates CRUD (Create, Read, Update, Delete) operations for job applications. It allows users to store, retrieve, update, and delete job application data, enabling efficient tracking of their job search progress.

## Features

-   **Create Job Applications**: Add new job applications with details like company, role, status, and application link.
-   **Retrieve Job Applications**: Fetch all job applications, sorted by the date they were applied.
-   **Update Job Status**: Modify the status of an existing job application.
-   **Delete Job Applications**: Remove job applications from the database.

## Tech Stack

-   **Node.js**: Runtime environment.
-   **Express.js**: Web framework.
-   **Mongoose**: MongoDB object modeling tool.
-   **MongoDB**: Database.
-   **cors**: Middleware for handling Cross-Origin Resource Sharing.
-   **dotenv**: Load environment variables from a `.env` file.

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd job-tracker-backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the project root and add the following:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=5000
    ```

    Replace `your_mongodb_connection_string` with your MongoDB URI (e.g., `mongodb://localhost:27017/job-tracker` for a local database or a MongoDB Atlas URI). The `PORT` is optional; it defaults to 5000 if not specified.

4.  **Start the server:**

    ```bash
    npm start
    ```

    The server will start on `http://localhost:5000` (or the port specified in `.env`). You should see:

    ```text
    Server running on port 5000
    MongoDB connected
    ```

## API Endpoints

The backend exposes a REST API under the `/api/jobs` base route. Below are the available endpoints:

| Method | Endpoint        | Description                     | Request Body (if applicable)                                                                        |
| :----- | :-------------- | :------------------------------ | :-------------------------------------------------------------------------------------------------- |
| POST   | `/api/jobs`      | Create a new job application    | `{ "company": "string", "role": "string", "status": "string", "link": "string" }`                    |
| GET    | `/api/jobs`      | Retrieve all jobs (sorted by date) | None                                                                                              |
| PUT    | `/api/jobs/:id`  | Update the status of a job by ID | `{ "status": "string" }`                                                                           |
| DELETE | `/api/jobs/:id` | Delete a job by ID              | None                                                                                              |

## Example Requests

### Add a Job

```bash
curl -X POST http://localhost:5000/api/jobs \
-H "Content-Type: application/json" \
-d '{"company":"Google","role":"Software Engineer","status":"Applied","link":"[https://careers.google.com](https://careers.google.com)"}'
