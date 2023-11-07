import { PrismaClient } from 'db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const prisma = new PrismaClient();
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = await prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: hashedPassword,
                rating: data.level,
            },
        });

        prisma.$disconnect();

        return NextResponse.json(user);
    } catch (error) {
        console.error('Error during user registration:', error);
        return NextResponse.json(
            { error: 'An error occurred while registering the user' },
            { status: 500 }
        );
    }
}
