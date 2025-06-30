# MoodBoard - A Simple Mood Sharing Platform

## Project Overview

MoodBoard is a minimal full-stack web application built as an intern project for Concept Cube. It allows users to submit short mood posts, optionally attach an image, and view a shared feed of all submitted entries. This project demonstrates the end-to-end integration of a Vue.js frontend with a Node.js/Express backend, including form data handling and file uploads.

## Features

-   Submit mood posts with a text message.
-   Optionally upload an image with each post.
-   View all submissions in a simple, real-time, scrollable feed.
-   Displays the text, image (if provided), and timestamp for each entry.

## Technology Stack

-   **Frontend:** Vue.js (v3), Axios
-   **Backend:** Node.js, Express
-   **File Handling:** `express-fileupload`

## Setup and Run Instructions

### Prerequisites

-   Node.js and npm installed on your machine.
-   Git installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone git clone https://github.com/pratim808/MoodBoard-local.git

    ```

2.  **Setup the Backend:**
    -   Navigate to the backend directory:
        ```bash
        cd MoodBoard-local/backend
        ```
    -   Install the required npm packages:
        ```bash
        npm install
        ```
    -   Start the backend server (it will run on `http://localhost:3000`):
        ```bash
        node server.js
        ```

3.  **Setup the Frontend:**
    -   Open a **new terminal window** and navigate back to the project's root directory.
    -   Navigate to the frontend directory:
        ```bash
        cd MoodBoard-local/frontend
        ```
    -   Install the required npm packages:
        ```bash
        npm install
        ```
    -   Start the frontend development server (it will run on `http://localhost:8080`):
        ```bash
        npm run serve
        ```

4.  **View the Application:**
    -   Open your web browser and go to `http://localhost:8080`.

## Screenshots

> ![MoodBoard Application Screenshot](assets/Screenshot.png)


## Notes on Improvements or Limitations

-   **Data Persistence:** Mood entries are currently stored in-memory on the server and are lost when the server restarts. A database (e.g., MongoDB, PostgreSQL, or SQLite) should be integrated to provide persistence.
-   **User Authentication:** The application is open, and anyone can post. Implementing a user authentication system (e.g., with JWTs) would allow for user-specific posts and a more personalized experience.
-   **Input Validation:** Image uploads lack validation for file size or type. Adding server-side validation is a crucial security and performance improvement.
-   **UI/UX:** The user interface is basic. Enhancements could include loading spinners during API calls, user feedback on successful posts, and a more polished CSS design.


