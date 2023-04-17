import { Navigate, useLocation } from 'react-router-dom';

export function RequireAuth() {
  //   const auth = useAuth();  // context
  const auth = true;
  const location = useLocation();
  if (!auth) {
    return <Navigate to='/sign_in' state={{ from: location }} />;
  }
  return <div />;
}
