// seed.js

import { PrismaClient } from "@prisma/client";
import { withAccelerate } from '@prisma/extension-accelerate';
//import bcrypt from "bcrypt";

const prisma = new PrismaClient().$extends(withAccelerate());

async function testQuery() {
  try {
    const users = await prisma.user.findMany({
      where: {
        email: {
          contains: "emonju35", // Replace with an email that exists in your database
        },
      },
      cacheStrategy: { ttl: 60 }, // Enable caching with a TTL of 60 seconds
    });

    console.log("Users:", users);
  } catch (error) {
    console.error("Error executing query:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testQuery();