import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const users = [
  {
    id: "1",
    email: "admin@example.com",
    password: await bcrypt.hash("password123", 10), // Pre-hashed password
    role: "admin",
  },
];

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = users.find((u) => u.email === credentials?.email);
        if (user && credentials?.password && (await bcrypt.compare(credentials.password, user.password))) {
          return { id: user.id, email: user.email, role: user.role };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token.user as { name?: string | null; email?: string | null; image?: string | null };
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