import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth.tsx';
import { getNewToken } from '../../../service/Requests/authenticate.ts';

// eslint-disable-next-line no-undef
export function RequireAuth({ children }: { children: JSX.Element }) {
  const { auth, autheticate } = useAuth();

  const doAuth = async () => {
    try {
      const { authorized, msg } = await autheticate();
    } catch (err) {
      // a
    }
  };
  doAuth();

  if (!auth) {
    return <p>Go to sign in page</p>;
    // return <Navigate to='/sign_in' state={{ from: location }} />;
  }

  return children;
}
