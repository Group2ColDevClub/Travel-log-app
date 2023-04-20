import { ReactNode, createContext, useState } from 'react';
import * as Requests from '../service/Requests';

interface AuthContextType {
  auth: any;
  autheticate: Function;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<boolean>(null);

  const autheticate = async () => {
    try {
      const { authorized, msg } = await Requests.authenticate();
      if (!authorized && msg === 'jwt expired') {
        const newToken = await Requests.getNewToken();
        if (!newToken.token) throw new Error('Failed to reauthenticate');
        setAuth(true);
      } else if (auth !== authorized) setAuth(authorized);
      return { authorized, msg };
    } catch (err) {
      setAuth(false);
      return { authorized: false, msg: err.message };
    }
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { auth, autheticate };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
