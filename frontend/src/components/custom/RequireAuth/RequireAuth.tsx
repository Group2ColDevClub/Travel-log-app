import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth.tsx';

// eslint-disable-next-line no-undef
export function RequireAuth({ children }: { children: JSX.Element }) {
  const { auth, autheticate } = useAuth();
  // const [loading, setLoading] = useState<boolean>();
  const location = useLocation();

  const doAuth = async () => {
    try {
      const authentication = await autheticate();
      console.log('authentication', authentication);
      // setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  };
  doAuth();

  // if (loading) return <p>loading</p>;

  if (!auth) {
    return <p>Go to sign in page</p>;
    // return <Navigate to='/sign_in' state={{ from: location }} />;
  }

  return children;
}
