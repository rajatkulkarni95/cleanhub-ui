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
});
