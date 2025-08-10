import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/db";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

declare module "next-auth" {
  interface Session {
    isNewUser?: boolean;
  }
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error("No profile");
      }

      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: { email: profile.email },
      });

    //   const isNewUser = !existingUser;
      const classification = existingUser?.classification || null;

      // Save/update user as before
      await prisma.user.upsert({
        where: {
          email: profile.email,
        },
        create: {
          email: profile.email,
          name: profile.name,
          classification: null,
        },
        update: {
          name: profile.name,
        },
      });

      // Attach isNewUser to account for use in JWT
      if (account) {
        (account as any).classification = classification;
      }

      return true;
    },

    async jwt({ token, account }) {
      if (account && (account as any).isNewUser !== undefined) {
        token.isNewUser = (account as any).isNewUser;
      }
      return token;
    },

    async session({ session, token }) {
      const existingUser = await prisma.user.findUnique({
        where: { email: session.user.email || ""},
      });

      if(existingUser) {
        session.user.id = existingUser.id
        session.user.classification = existingUser.classification || null;
        session.user.email = existingUser.email || null;
        session.user.seller = existingUser.seller || null;
        session.user.name = existingUser.name || null;
      } else {
        console.log("User not found in database");
      }

      return session;
    },

    async redirect({ baseUrl, url }) {
      // Default to home unless session says it's a new user
      // Unfortunately, token/session aren't available directly here
      // So you’ll use `pages.newUser` instead
      return baseUrl;
    },
  },

  // 🔥 Magic redirect for first-time users
  pages: {
    newUser: "/newAccount", // will be used automatically
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
