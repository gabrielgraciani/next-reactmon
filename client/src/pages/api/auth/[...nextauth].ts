import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { api } from 'services/api';

const options = {
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
    async jwt(token: { accessToken: string }, user) {
      if (user) {
        token.accessToken = user.token;
      }

      return token;
    },
    async session(session, token) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    error: '/login',
  },
};

export default (req, res) => NextAuth(req, res, options);
