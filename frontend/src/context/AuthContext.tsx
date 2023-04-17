import { ReactNode, createContext, useMemo, useState } from 'react';
import * as Requests from '../service/Requests';

interface AuthContextType {
  user: any;
  signin: (user: string, callback: () => {}) => void;
  signout: (callback: () => {}) => void;
}

const AuthContext = createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const autheticate = async () => {
    // const res = await Requests.authenticate();
    // const data = await res.json();
  };

  const signin = (newUser: string, callback: () => {}) => {
    // return fakeAuthProvider.signin(() => {
    //   setUser(newUser);
    //   callback();
    // });
  };

  const signout = (callback: () => {}) => {
    // return fakeAuthProvider.signout(() => {
    //   setUser(null);
    //   callback();
    // });
  };

  const value = useMemo(() => ({ user, signin, signout }), [user, signin, signout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext };
