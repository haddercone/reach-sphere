import TwitterProvider from "next-auth/providers/twitter"

type TokenCallback = (options: {
    token: Record<string, unknown>;
    account?: Record<string, unknown>;
}) => Promise<Record<string, unknown> | null>;
  
interface AuthCallbacks {
    jwt?: TokenCallback;
    session?: any
}

type Options = {
    secret: string | undefined,
    providers: any[],
    callbacks: AuthCallbacks
}

export const authOptions : Options = {
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
            // console.log(token); 
            // console.log(account);

            token.accessToken  = account.oauth_token;
            token.refreshToken = account.oauth_token_secret;
          }
          return token;
        },

        async session({session, token }: any){
            session.accessToken = token?.accessToken
            session.user.id = token.id
            // console.log("Token", token);
            
            // console.log("Session: ", session);
            return session
        }
      }
}
