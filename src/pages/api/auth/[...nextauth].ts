import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { env } from "../../../config/env";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: env.githubClientId,
      clientSecret: env.githubClientSecret,
      authorization: { params: { scope: "user:email delete_repo repo" } },
    }),
  ],
  callbacks: {
    jwt: async ({ token, account }) => {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: async ({ session, token }) => {
      // Customize the session object
      session.id = token.id;
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
