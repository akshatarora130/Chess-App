import NextAuth from "next-auth"
import AppleProvider from "next-auth/providers/apple"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        AppleProvider({
            clientId: "asdf",
            clientSecret: "dsf"
        }),

        GoogleProvider({
            clientId: "dsaf",
            clientSecret: "sdfa"
        })
    ],
}

const handler =  NextAuth(authOptions)

export { handler as GET, handler as POST }

