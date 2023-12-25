import TwitterProvider from "next-auth/providers/twitter"
import { NextAuthOptions } from "next-auth";

export const authOptions : NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        TwitterProvider({
            clientId: process.env.API_KEY || "",
            clientSecret: process.env.API_KEY_SECRET || "",
        })
    ],
    callbacks: {
        async jwt({ token, account }) {
          // Persist the OAuth access_token to the token right after signin
          if (account) {

            token.accessToken  = account.oauth_token;
            token.refreshToken = account.oauth_token_secret;
          }
          return token;
        },

        async session({session, token }: any){
            session.accessToken = token?.accessToken
            session.user.id = token.id

            return session
        }
      },
}
