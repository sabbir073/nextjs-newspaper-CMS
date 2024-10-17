// seed.js

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    // Hash the password
    const hashedPassword = await bcrypt.hash('DemoPassword123!', 10);

    // Create a demo user
    await prisma.user.create({
        data: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            password: hashedPassword, // Ensure this field is recognized in your schema
            role: 'User',             // Role field
            display_name: null,       // Nullable field
            forget_password_token: null,
        },
    });

    console.log('Demo user created');
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
