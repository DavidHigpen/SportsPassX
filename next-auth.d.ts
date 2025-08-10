import { DefaultSession, DefualtUser } from "next-auth";

declare module "next-auth" {
    interface User extends DefaultUser {
        classification?: string | null;
    }

    interface Session extends DefaultSession { 
        user: {
            id?: string;
            name?: string | null;
            email?: string | null;
            seller?: boolean | null;
            image?: string | null;
            classification?: string | null;
        };
    }
}