# Project Setup

Follow these steps to get the Echo project running on your local machine for development and testing.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20.9.0 or later)
- A package manager (npm, yarn, pnpm, or bun)
- A [PostgreSQL](https://www.postgresql.org/) database server

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/dss-bu/echo.git
    cd echo
    ```

2.  **Install dependencies:**
    Using your preferred package manager:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Install Git Hooks:**
    This will set up Husky pre-commit hooks for linting, formatting, and type-checking.
    ```bash
    npm run prepare
    ```

4.  **Set up environment variables:**
    Copy the example environment file to create your local configuration:
    ```bash
    cp .env.example .env
    ```

5.  **Configure your `.env` file:**
    Open the newly created `.env` file and fill in the required variables:

    * `DATABASE_URL`: Set this to your PostgreSQL connection string.
        ```
        # Example:
        DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
        ```
    * `BETTER_AUTH_SECRET`: Generate a secret key by running one of the following commands and pasting the output:
        ```bash
        npx @better-auth/cli secret
        ```
    * `NEXT_PUBLIC_BASE_URL` & `BETTER_AUTH_URL`: For local development, these should be set to `http://localhost:3000`.
    * **(Optional) OAuth and Email Keys:** To test social login and email sending, you will need to fill in the keys for:
        * `RESEND_API_KEY`
        * `GITHUB_CLIENT_ID`
        * `GITHUB_CLIENT_SECRET`
        * `GOOGLE_CLIENT_ID`
        * `GOOGLE_CLIENT_SECRET`

6.  **Run database migrations:**
    This command will apply the database schema (defined in `prisma/schema.prisma`) to your PostgreSQL database and generate the Prisma Client.
    ```bash
    npm run prisma:migrate:dev
    ```

7.  **Generate Better Auth types:**
    This script generates necessary types for the authentication system.
    ```bash
    npm run auth:generate
    ```

8.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application should now be running at [http://localhost:3000](http://localhost:3000).

## Available Scripts

Here are some useful scripts to know:

-   `npm run dev`: Starts the Next.js development server.
-   `npm run build`: Creates a production-ready build of the application.
-   `npm run start`: Starts the application in production mode (requires a build first).
-   `npm run lint`: Runs ESLint to check for code quality and style issues.
-   `npm run format`: Formats all code using Prettier.
-   `npm run check-types`: Runs the TypeScript compiler to check for type errors.
-   `npm run prisma:studio`: Opens the Prisma Studio GUI to view and edit your database.
-   `npm run prisma:db:push`: Pushes the current Prisma schema to the database without running migrations (use with caution).
-   `npm run prisma:generate`: Manually generates the Prisma client.