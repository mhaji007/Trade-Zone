import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import Auth0Provider from "next-auth/providers/auth0";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER,
      // Enables automatic account linking.
      // Note:
      // Normally, when you sign in with an OAuth provider and another account with the same email address
      // already exists, the accounts are not linked automatically. Automatic account linking on sign in
      // is not secure between arbitrary providers and is disabled by default. However,
      // it may be desirable to allow automatic account linking if you trust that the provider involved has
      // securely verified the email address associated with the account.
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  pages: {
    // signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  // database: process.env.MONGODB_URL,
  secret: process.env.JWT_SECRET,
});
