import NextAuth, { User } from 'next-auth';
import Providers from 'next-auth/providers';
import { api } from 'services/api';

interface IUserProps extends User {
  token: string;
  accessToken: string;
}

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'email',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const { data } = await api.post('/sessions', {
            email: credentials.email,
            password: credentials.password,
          });

          const { user } = data;
          user.token = data.token;

          return user;
        } catch (e) {
          const errorMessage = e.response.data.message;
          throw new Error(errorMessage);
        }
      },
    }),
  ],
  session: {
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  callbacks: {
    async jwt(token, user: IUserProps) {
      if (user) {
        token.accessToken = user.token;
      }

      return token;
    },
    async session(session, user?: IUserProps) {
      session.accessToken = user.accessToken;
      return session;
    },
  },
  pages: {
    error: '/login',
  },
});
