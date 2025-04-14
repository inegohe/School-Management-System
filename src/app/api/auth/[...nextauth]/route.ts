import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

//const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // const user = await prisma.users.findUnique({
        //   where: {
        //     email: credentials?.email,
        //   },
        // });
        const user = {
          email: "nifemiolaniyi4@gmail.com",
          password: "helloworld",
          role: "admin",
        };
        if (
          user &&
          credentials?.password &&
          user.password === credentials?.password
          //(await bcrypt.compare(credentials.password, user.password))
        ) {
          return user as any;
        } else if (user && user.password === "") {
          return { error: "PNS" }; //Password Not Set
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user as {
        name?: string | null;
        email?: string | null;
        image?: string | null;
      };
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
