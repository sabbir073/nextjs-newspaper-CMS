# Newspaper Project

This is a Newspaper project built using **Next.js 14**, **Node.js 22.x**, **npm 10.9**, **TypeScript**, **Prisma**, and **PostgreSQL** with the latest **Tailwind CSS**.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (22.x)
- [npm](https://www.npmjs.com/) (10.9)
- PostgreSQL
- [Prisma](https://www.prisma.io/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/newspaper.git
   ```

2. Navigate to the project directory:

   ```bash
   cd newspaper
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Setting Up the Database

1. **Create the database**: 

   Ensure your PostgreSQL server is running, and create a new database with user and password. Later I will configure a remote postgresql so you will not need to create db locally.

   For now, install postgresql and create database. you can also use your default user postgres and password.

2. **Configure Prisma**:

   Create a .env in project root, or update if its already created.

   Update the `DATABASE_URL` in your `.env` file to point to your PostgreSQL database:

   ```plaintext
   DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/Databse_name"
   ```

3. **Migrate the database**:

   We already have a prisma schema, so Don't worry about the DB table. If you migrate, it will create table automatically.

   To create tables based on your Prisma schema, run:

   ```bash
   npx prisma migrate dev --name init
   ```

4. **Seeding the database**:

   If you have a seed file configured, you can seed the database with initial data:

   ```bash
   npm run seed
   ```

### Working with Database Tables

- **Creating a table**:

   To create or modify your Prisma schema, edit the `schema.prisma` file. Then run the migration command:

   ```bash
   npx prisma migrate dev --name create_table_name
   ```

- **Updating a table**:

   Modify the `schema.prisma` file to reflect changes in your table structure. Then run:

   ```bash
   npx prisma migrate dev --name update_table_name
   ```

- **Deleting a table**:

   Remove the corresponding model from the `schema.prisma` file. Run the migration command to reflect this change:

   ```bash
   npx prisma migrate dev --name delete_table_name
   ```

### Running the Project

To start the development server, run:

```bash
npm run dev
```

Your application will be running at `http://localhost:3000`.

## Contributing

If you would like to contribute to this project, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js
- Tailwind CSS
- Prisma
- PostgreSQL
