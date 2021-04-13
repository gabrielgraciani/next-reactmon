import React, {
  createContext,
  useCallback,
  ReactNode,
  useState,
  useContext,
} from 'react';
import Cookies from 'js-cookie';

import { api } from 'services/api';

interface IUser {
  name: string;
  email: string;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  user: IUser;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

interface IAuthProvider {
  children: ReactNode;
}

interface IAuthState {
  token: string;
  user: IUser;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider): JSX.Element => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = Cookies.get('@Reactmon:token');
    const user = Cookies.get('@Reactmon:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    Cookies.set('@Reactmon:token', token);
    Cookies.set('@Reactmon:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    Cookies.remove('@Reactmon:token');
    Cookies.remove('@Reactmon:user');

    api.defaults.headers.authorization = '';

    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
