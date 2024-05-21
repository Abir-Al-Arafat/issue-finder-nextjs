import NextAuth from "next-auth"; // Referring to the auth.ts we just created
const handler = NextAuth({
  providers: [],
});
export { handler as GET, handler as POST };
