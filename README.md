# Take Home Test BTS.id

To-do List Application adalah sebuah aplikasi yang biasa digunakan untuk menulis hal-hal yang perlu digunakan.
Dalam sebuah to-do list application, hal-hal yang biasanya bisa dilakukan adalah mencatat hal-hal yang perlu
dilakukan dalam bentuk poin-poin, dan menandai hal-hal tersebut apabila sudah selesai dilakukan.

## Features

### Core

- 🟦 [**TypeScript**](https://www.typescriptlang.org/) - Configured to maximize type safety
- 🚀 [**Express**](https://expressjs.com/) - Fast and minimalist web framework for Node.js
- 🐘 [**PostgreSQL**](https://www.postgresql.org/) - Reliable relational database for data storage
- 🌟 [**Prisma**](https://www.prisma.io/) - ORM (Object Relational Mapping) for simplified database access and migrations

### Utilities

- 📝 [**Winston**](https://github.com/winstonjs/winston) - Versatile logging library for structured log management
- ✅ [**Joi**](https://joi.dev/) - Data validation library for ensuring data integrity
- 🔐 [**JWT**](https://jwt.io/) - Authentication solution for securing API endpoints

## Project Structure

The project follows a structured organization with the following layout:

```
src/
├── config/
├── controllers/
├── interface/
├── logs/
├── middlewares/
├── migrations/
├── public/
├── repositories/
├── routes/
├── service/
└── validators/
```

- `config/`: Configuration files and environment variables
- `controllers/`: Controllers
- `interface/`: Type definitions and interfaces
- `logs/`: Logging configurations and log files
- `middlewares/`: Custom middleware functions for request processing
- `migrations/`: Database migration files
- `public/`: Static files to be served
- `repositories/`: Database access logic
- `routes/`: API route definitions
- `service/`: Core application services
- `validators/`: Data validation schemas

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables (copy `.env.example` to `.env` and fill in the values)
4. Start the database:
   ```
   npx prisma generate
   ```
5. Run database migrations:
   ```
   npx prisma migrate dev --name init
6. Start the development server:
   ```
   npm run dev
   ```

Open http://localhost:3000/ with your browser to access the API.

## Contribution Guidelines

We welcome contributions to this project.

### Git Branch Flow

features/dev-(yourname) --> development --> main

### Commit Messages

Format Commit: `<type>: <subject>`

### Example Commit

```bash
feat: add new transaction endpoint
^--^  ^---------------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating tasks etc; no production code change)
