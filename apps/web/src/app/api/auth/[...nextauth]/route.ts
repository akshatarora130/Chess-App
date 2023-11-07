import NextAuth from "next-auth";
import AppleProvider from "next-auth/providers/apple";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "db";
import bcrypt from 'bcrypt';

export const authOptions = {
    providers: [
        AppleProvider({
            clientId: "asdf",
            clientSecret: "dsf",
        }),

        GoogleProvider({
            clientId: "dsaf",
            clientSecret: "sdfa",
        }),

        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                if(credentials === undefined){
                    return ;
                }
                const prisma = new PrismaClient();
                const user = await prisma.user.findUnique({
                    where: { username: credentials.username },
                });

                if (user && (await bcrypt.compare(credentials.password, user.password))) {
                    prisma.$disconnect();
                    return Promise.resolve(user);
                } else {
                    prisma.$disconnect();
                    return Promise.resolve(null);
                }
            },
        }),
    ],
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
