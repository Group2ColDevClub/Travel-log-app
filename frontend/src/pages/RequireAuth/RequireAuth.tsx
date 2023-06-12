import { useAuth } from '../../hooks/useAuth.tsx';
import styles from './RequireAuth.module.css';
import Link from '../../components/ui/Link/Link.tsx';

// eslint-disable-next-line no-undef
export function RequireAuth({ children }: { children: JSX.Element }) {
  const { auth, autheticate } = useAuth();
  autheticate();

  if (!auth) {
    return (
      <div className={styles.wrapper}>
        <p className={styles.text}>Lets find your next trip!</p>
        <Link href='/sign_in' label='Sign in now' />
      </div>
    );
  }

  return children;
}
