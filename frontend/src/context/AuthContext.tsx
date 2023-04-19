/* eslint-disable no-unused-vars */
import { ReactNode, createContext, useMemo, useState } from 'react';
import * as Requests from '../service/Requests';

interface AuthContextType {
  auth: any;
  autheticate: Function;
}

export const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<boolean>(null);

  const autheticate = async () => {
    const res = await Requests.authenticate();
    console.log('res', res);
    if (auth !== res.authorized) setAuth(res.authorized);
    return res;
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { auth, autheticate };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
