# 💻 Cyberia test task

A responsive frontend application designed as an adaptive landing page.

Built on a modern stack including **Next.js (App Router)**, **Zustand** for state management, and **SCSS Modules** for isolated styling.

⚡ [Live Preview](https://zainds.github.io/cyberia-task/) ⚡

## How to Run

**Prerequisites:**
* **Node.js 18 or higher**
* VS Code (Recommended)

**Installation and Execution:**
1.  Clone the repository.
2.  Navigate to the project folder and run `npm install` to download dependencies.
3.  Run `npm run dev` to start the development server.
4.  Open `http://localhost:3000` in your browser.

**Network Connection Note:**
When you run the application, it automatically attempts to fetch live projects and categories from the Cyberia REST API. If the backend server is unreachable (e.g., returns a 502 error), the application will instantly catch the exception and seamlessly fall back to local mock data. The UI and category filtering will continue to function without any interruption for the user.